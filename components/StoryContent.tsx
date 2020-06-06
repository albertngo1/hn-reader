/* eslint-disable react/prop-types */

import React, { FC, useEffect, useState } from 'react';
import { mapIdsToItem } from '../utils/utils';

interface Props {
  commentIds: number[]
}

const StoryContent: FC<Props> = ({ commentIds }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getData = async () => setComments(await mapIdsToItem(commentIds));

    getData();
  }, [commentIds])

  return (
    <>
      <div>
      </div>

      <style jsx>{`

      `}</style>
    </>
  )
}


export default StoryContent;
