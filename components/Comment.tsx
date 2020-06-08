/* eslint-disable react/prop-types */

import React, { FC, useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { mapIdsToItem } from '../utils/utils';
import { getItem } from '../utils/network';

interface Props {
  commentId: number
}

const Comment: FC<Props> = ({ commentId }) => {
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
      kids.map((kid, idx)=> <Comment key={`child-comment-${id}-${idx}`} commentId={kid} />)
    )
  }

  return (
    <>
      {by} {formattedTime}
      {text}

      {renderNestedComments()}
      <style jsx>{`

      `}</style>
    </>
  )
}


export default Comment;
