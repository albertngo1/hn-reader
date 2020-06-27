/* eslint-disable react/prop-types */

import React, { Fragment, ReactElement, FC, useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { getItem } from '../utils/network';
import { stringToColour } from '../utils/utils';

interface Props {
  commentId: number
  level?: number
}

const Comment: FC<Props> = ({ commentId, level }) => {
  const [comment, setComment] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    async function getData() {
      setComment(await getItem(commentId));
    }

    getData();
  }, [commentId])

  if (!comment) {
    return null;
  }

  const { time, kids, by, text, id } = comment;
  const formattedTime = format(time.toString() + '000', 'en_US');

  const renderNestedComments = () => {
    if (!kids || kids.length === 0) return;

    return (
      kids.map((kid: number, idx: number): ReactElement => {
        return (
          <Fragment key={`child-comment-${id}-${idx}`}>
            <div>
              <Comment
                commentId={kid}
                level={level + 1}
              />
            </div>

            <style jsx>{`
              div {
                margin-left: 2rem;
                border: 2px solid ${stringToColour(level.toString())};
                border-radius: 10px;
                padding: .5rem;
                margin-bottom: 1rem;
              }
            `}</style>
          </Fragment>
        );
      })
    )
  }

  if (collapsed) {
    return (
      <>
        <a onClick={() => setCollapsed(!collapsed)}>
          [+] {by} {formattedTime}
        </a>

        <style jsx>{`
          div {
            margin: 1rem 0;
          }

          a {
            cursor: pointer;
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <a onClick={() => setCollapsed(!collapsed)}>[–]</a>
      &nbsp;{by} {formattedTime}
      <div dangerouslySetInnerHTML={{ __html: text }}></div>

      {renderNestedComments()}

      <style jsx>{`
        div {
          margin: 1rem 0;
        }

        a {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}


export default Comment;
