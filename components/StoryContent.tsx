/* eslint-disable react/prop-types */

import React, { ReactElement, FC, useState } from 'react';
import Comment from './Comment';
import { stringToColour } from '../utils/utils';
import { ICommentCache } from '../utils/types';

interface Props {
  commentIds: number[]
}

const StoryContent: FC<Props> = ({ commentIds }) => {
  const level = 0;
  const [commentCache, setCommentCache] = useState<ICommentCache>({});
  const [loadedCommentIndex, setLoadedCommentIndex] = useState(1);

  return (
    <>
      {commentIds.slice(0, loadedCommentIndex).map((commentId: number, idx: number): ReactElement => {
        return (
          <div className='comment-container' key={`parent-comment-${commentId}-${idx}`}>
            <Comment
              commentId={commentId}
              level={level + 1}
              commentCache={commentCache}
              setCommentCache={setCommentCache}
            />
          </div>
        )
      })}

      <a onClick={() => setLoadedCommentIndex(loadedCommentIndex + 2)}>Load more</a>
      <a onClick={() => setLoadedCommentIndex(commentIds.length)}>Load all</a>

      <style jsx>{`
        .comment-container {
          border: 2px solid ${stringToColour(level.toString())};
          border-radius: 10px;
          padding: .5rem;
          margin-bottom: 1rem;
        }

        a {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default StoryContent;
