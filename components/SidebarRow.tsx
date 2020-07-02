/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { format } from 'timeago.js';
import { HandleStoryIdClick, IItem as IStory } from '../utils/types';
import { COLORS } from '../utils/colors';

const SidebarRow: FC<{ story: IStory, index: number, handleStoryIdClick: HandleStoryIdClick }> =
  ({ story: { id, title, score, by, time, descendants }, index, handleStoryIdClick }) => {
  return (
    <>
      <div onClick={() => handleStoryIdClick(id)} className='row-wrapper'>
        <div className='primary-text-wrapper'>
          {index}.&nbsp;
          <div className='primary-text'>{title}</div>
        </div>
        <div className='secondary-text'>
          {score} points by {by} {format(time.toString() + '000', 'en_US')} | &nbsp;
          {descendants} comments
          </div>
      </div>

      <style jsx>
        {`
          .row-wrapper {
            padding: 10px 5px;
          }

          .row-wrapper:hover {
            background-color: ${COLORS.sideBarRowHover};
          }

          .primary-text-wrapper {
            display: flex;
            font-size: .9rem;
            margin-bottom: 5px;
          }

          .secondary-text {
            font-size: .75rem;
          }
        `}
      </style>
    </>
  )
}

export default SidebarRow;
