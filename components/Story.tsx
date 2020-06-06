/* eslint-disable react/prop-types */
import React, { FC, useState, useEffect } from 'react';
import { getItem } from '../utils/network';
import StoryHeader from './StoryHeader';

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

  const { by, score, time, title, url } = story;

  return (
    <>
    <StoryHeader by={by} score={score} time={time} title={title} url={url} />

    {/* <StoryContent /> */}
    <style jsx>{`
      div {
        height: 100%;
        margin-left: 200px;
      }
    `}</style>
    </>
  )
}

export default Story;
