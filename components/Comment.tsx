/* eslint-disable react/prop-types */

import React, { ReactElement, FC, useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { getItem } from '../utils/network';
import { stringToColour } from '../utils/utils';
import { ICommentCache } from '../utils/types';
import { COLORS } from '../utils/colors';

interface Props {
  commentId: number
  level?: number
  commentCache: ICommentCache
  setCommentCache
}

const Comment: FC<Props> = ({ commentId, level, commentCache, setCommentCache }) => {
  const [comment, setComment] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    async function getData() {
      const comment = await getItem(commentId);

      setComment(comment);

      setCommentCache(prevState => (
        { ...prevState, [commentId]: comment }
      ));
    }

    if (commentCache[commentId]) {
      setComment(commentCache[commentId]);
    } else {
      getData();
    }

  }, [commentId])

  if (!comment || comment.deleted) {
    return null;
  }

  const { time, kids, by, text, id } = comment;
  const formattedTime = format(time.toString() + '000', 'en_US');

  const renderNestedComments = () => {
    if (!kids || kids.length === 0) return;

    return (
      kids.map((kid: number, idx: number): ReactElement => {
        return (
          <Comment
            key={`child-comment-${id}-${idx}`}
            commentId={kid}
            level={level + 1}
            commentCache={commentCache}
            setCommentCache={setCommentCache}
          />
        );
      })
    )
  }

  if (collapsed) {
    return (
      <>
        <a onClick={() => setCollapsed(!collapsed)}>
          <span className='comment-user'>[+] {by}</span>{' '}
          <span className='comment-date'>{formattedTime}</span>
        </a>

        <style jsx>{`
          div {
            margin: 1rem 0;
          }

          a {
            cursor: pointer;
            user-select: none;
            margin-left: 1rem;
          }

        .comment-user {
          color: ${COLORS.lightBlue};
          font-size: 0.80rem;
          font-weight: 700;
        }

        .comment-date {
          color: ${COLORS.black};
          font-size: 0.7rem;
        }
        `}</style>
      </>
    )
  }

  return (
    <>
      <div className='comment-wrapper'>
        <div className='comment-inner-wrapper'>
          <div>
            <span className='comment-user'>
              <a onClick={() => setCollapsed(!collapsed)}>[–]</a>
              {' '}{by}
            </span>
            {' '}
            <span className='comment-date'>
              {formattedTime}
            </span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>

          {renderNestedComments()}
        </div>
      </div>



      <style jsx>{`
        div {
          margin-bottom: 1rem;
        }

        a {
          cursor: pointer;
          user-select: none;
        }

        .comment-user {
          color: rgb(106, 152, 175);
          font-size: 0.80rem;
          font-weight: 700;
        }

        .comment-date {
          color: black;
          font-size: 0.7rem;
        }

        .comment-wrapper {
          border: 2px solid ${stringToColour(level.toString())};
          border-radius: 10px;
          padding: .5rem;
          margin-bottom: 1rem;
          background-color: ${level % 2 === 0 ? COLORS.evenCommentBackground : COLORS.oddCommentBackground}
        }

        .comment-inner-wrapper {
          margin-left: 1rem;
        }
      `}</style>
    </>
  )
}


export default Comment;
