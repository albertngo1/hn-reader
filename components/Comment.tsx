/* eslint-disable react/prop-types */

import React, { ReactElement, FC, useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { getItem } from '../utils/network';

interface Props {
  commentId: number
  level?: number
}

const Comment: FC<Props> = ({ commentId, level = 0 }) => {
  const [comment, setComment] = useState(null);

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
        return <Comment key={`child-comment-${id}-${idx}`} commentId={kid} level={level + 1} />;
      })
    )
  }

  const markup = { __html: text };

  return (
    <>
      {by} {formattedTime}
      <div dangerouslySetInnerHTML={markup}></div>

      {renderNestedComments()}
      <style jsx>{`

      `}</style>
    </>
  )
}


export default Comment;
