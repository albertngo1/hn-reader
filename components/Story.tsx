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
    <div className='container'>
      <div className='storyheader-container'>
        <StoryHeader by={by} score={score} time={time} title={title} url={url} />
      </div>

      <div className='storycontent-container'>
        <StoryContent commentIds={kids}/>
      </div>
    </div>

    <style jsx>{`
      .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 220px;
        width: 3000px;
      }

      .storyheader-container {
        padding: 0 2rem;
      }

      .storycontent-container {
        padding: 2rem;
      }
    `}</style>
    </>
  )
}

export default Story;
