
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

const SidebarRow: React.FC<{ story: Story, index: number }> = ({ story: { title, score, by, time, kids }, index }) => {
  return (
    <>
      <div className='row-wrapper'>
        <div className='primary-text-wrapper'>
          {index}.&nbsp;
          <div className='primary-text'>{title}</div>
        </div>
        <div className='secondary-text'>{score} points by {by} {format(time.toString() + '000', 'en_US')} | {kids.length} comments</div>
      </div>

    <style jsx>{`
      .row-wrapper {
        padding: 10px 5px;
      }

      .row-wrapper:hover {
        background-color: #fff;
      }

      .primary-text-wrapper {
        display: flex;
        font-size: .9rem;
        margin-bottom: 5px;
      }

      .secondary-text {
        font-size: .75rem;
        padding-left: 15px;
      }
    `}</style>
    </>
  )
}

export default SidebarRow;
