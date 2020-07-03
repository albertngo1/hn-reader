/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { format } from 'timeago.js';
import { HandleStoryIdClick, IItem as IStory } from '../utils/types';
import { COLORS } from '../utils/colors';
import { Row, Col } from 'react-bootstrap';

const SidebarRow: FC<{ story: IStory, index: number, handleStoryIdClick: HandleStoryIdClick }> =
  ({ story: { id, title, score, by, time, descendants }, index, handleStoryIdClick }) => {
  return (
    <>
      <div onClick={() => handleStoryIdClick(id)} className='row-wrapper'>
        <div className='outer-wrapper'>
          {index}.&nbsp;
          <div>
            <Row>
              <Col sm='12'>
                <div className='primary-text'>{title}</div>
              </Col>
              <Col sm='12'>
                <span className='secondary-text'>
                  {score} points by {by} {format(time.toString() + '000', 'en_US')}
                </span>
              </Col>
              <Col sm='12'>
                <span className='tertiary-text'>
                  {descendants} comments
                </span>
              </Col>
            </Row>
          </div>
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

          .outer-wrapper {
            display: flex;
            direction: column;
            font-size: .9rem;
            margin-bottom: 5px;
          }

          .secondary-text, .tertiary-text {
            font-size: .75rem;
            color: ${COLORS.grey};
          }
        `}
      </style>
    </>
  )
}

export default SidebarRow;
