/* eslint-disable react/prop-types */

import React, { ReactElement, FC } from 'react';
import Comment from './Comment';
import { stringToColour } from '../utils/utils';

interface Props {
  commentIds: number[]
}

const StoryContent: FC<Props> = ({ commentIds }) => {
  const level = 0;
  return (
    <>
      {commentIds.map((commentId: number, idx: number): ReactElement => {
        return (
          <div key={`parent-comment-${commentId}-${idx}`}>
            <Comment commentId={commentId} level={level + 1} />
          </div>
        )
      })}

      <style jsx>{`
        div {
          border-top: 3px solid ${stringToColour(level.toString())};
          border-left: 3px solid ${stringToColour(level.toString())};
          border-top-left-radius: 10px;
        }
      `}</style>
    </>
  )
}

export default StoryContent;
