/* eslint-disable react/prop-types */
import React, { FC, useState, useEffect } from 'react';
import { getStoryIds, Categories } from '../utils/network';
import SidebarRow from './SidebarRow';
import { HandleStoryIdClick } from '../utils/types';
import { mapIdsToItem } from '../utils/utils';
import { COLORS } from '../utils/colors';
import { Row, Col } from 'react-bootstrap';

type Props = {
  handleStoryIdClick: HandleStoryIdClick
};

const SidebarPanel: FC<Props> = ({ handleStoryIdClick }) => {
  const [, setStoryIds] = useState([]);
  const [stories, setStories] = useState([]);
  const [pagination] = useState(1);
  const [category] = useState(Categories.Best);

  useEffect(() => {
    const fetchData = async () => {
      const ids = await getStoryIds(category);

      setStoryIds(ids);
      setStories(await mapIdsToItem(ids.slice(pagination * 50, pagination * 50 + 50)));
    }
    fetchData();
  }, [category]);

  if (!stories.length) {
    return null;
  }

  return (
    <>
      <div className='wrapper'>
        <Row>
          <Col>
            HackerNews Reader
          </Col>
        </Row>
        <div className='sidebar-panel'>
          <ul>
            {stories.map((story, idx) => (
              <li key={`story-${idx}`}>
                <SidebarRow story={story} index={pagination + idx} handleStoryIdClick={handleStoryIdClick} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          position: fixed;
        }

        .sidebar-panel {
          position: fixed;
          height: 100%;
          width: 16.67%;
        }

        ul {
          height: 100%;
          overflow-y: auto;
        }

        ul > li:nth-of-type(odd) {
          background-color: ${COLORS.oddSidebarRow};
        }

        li {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default SidebarPanel;
