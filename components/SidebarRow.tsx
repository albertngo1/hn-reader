
import React from 'react';
import { format } from 'timeago.js';

type Story = {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}

const SidebarRow: React.FC<{ story: Story, index: number }> = ({ story, index }) => {
  return (
    <a rel="noopener noreferrer" href={story.url} target='_blank'>
      <div>
        {index}. {story.title}
      </div>
      {story.score} points by {story.by} {format(story.time.toString() + '000', 'en_US')} | {story.kids.length} comments
    </a>
  )
}

export default SidebarRow;
