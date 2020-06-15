/* eslint-disable react/prop-types */
import React, { FC, useState, useEffect } from 'react';
import { getItem } from '../utils/network';
import StoryHeader from './StoryHeader';
import StoryContent from './StoryContent';

interface Props {
  storyId: number;
}

const Story: FC<Props> = ({ storyId }) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    getItem(storyId)
      .then((res: string) => setStory(res));
  }, [storyId]);

  if (!story) {
    return null;
  }

  const { by, score, time, title, url, kids } = story;

  return (
    <>
    <div>
      <StoryHeader by={by} score={score} time={time} title={title} url={url} />

      {/* <StoryContent commentIds={kids}/> */}
    </div>

    <style jsx>{`
      div {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 200px;
      }
    `}</style>
    </>
  )
}

export default Story;
