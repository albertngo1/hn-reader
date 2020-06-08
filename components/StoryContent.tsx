/* eslint-disable react/prop-types */

import React, { FC } from 'react';
import Comment from './Comment';

interface Props {
  commentIds: number[]
}

const StoryContent: FC<Props> = ({ commentIds }) => {
  return (
    <>
      {commentIds.map((commentId, idx) => <Comment key={`parent-comment-${idx}`}  commentId={commentId}/>)}

      <style jsx>{`

      `}</style>
    </>
  )
}


export default StoryContent;
