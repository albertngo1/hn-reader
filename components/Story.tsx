import React, { useState, useEffect } from 'react';
import { getItem } from '../utils/network';
import StoryHeader from './StoryHeader';

interface Props {
  storyId: number;
}

const Story: React.FC<Props> = ({ storyId }) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    getItem(storyId)
      .then((res: string) => setStory(res));
  }, [storyId]);

  console.log(story)
  return (
    <>
    <StoryHeader story={story} />
    <div>{storyId}</div>

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
