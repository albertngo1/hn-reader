/* eslint-disable react/prop-types */

import React, { ReactElement, FC, useState } from 'react';
import Comment from './Comment';
import { stringToColour } from '../utils/utils';
import { ICommentCache } from '../utils/types';
import { COLORS } from '../utils/colors';

interface Props {
  commentIds: number[]
  loadedCommentIndex: number
}

const StoryContent: FC<Props> = ({ commentIds, loadedCommentIndex }) => {
  const level = 0;
  const [commentCache, setCommentCache] = useState<ICommentCache>({});

  return (
    <>
      {commentIds.slice(0, loadedCommentIndex).map((commentId: number, idx: number): ReactElement => {
        return (
          <Comment
            key={`parent-comment-${commentId}-${idx}`}
            commentId={commentId}
            level={level + 1}
            commentCache={commentCache}
            setCommentCache={setCommentCache}
          />
        )
      })}

      <style jsx>{`
        .comment-container {
          border: 2px solid ${stringToColour(level.toString())};
          border-radius: 10px;
          padding: .5rem;
          margin-bottom: 1rem;
          background-color: ${COLORS.evenCommentBackground}
        }
      `}</style>
    </>
  )
}

export default StoryContent;
