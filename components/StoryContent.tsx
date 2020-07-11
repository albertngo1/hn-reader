/* eslint-disable react/prop-types */

import React, { ReactElement, FC, useState } from 'react';
import Comment from './Comment';
import { ICommentCache } from '../utils/types';

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
    </>
  )
}

export default StoryContent;
