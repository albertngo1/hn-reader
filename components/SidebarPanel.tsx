/* eslint-disable react/prop-types */
import React, { FC, useState, useEffect } from 'react';
import { getItem, getStoryIds, Categories } from '../utils/network';
import SidebarRow from './SidebarRow';
import { HandleStoryIdClick } from '../utils/types';

type Props = {
  handleStoryIdClick: HandleStoryIdClick
};

const SidebarPanel: FC<Props> = ({ handleStoryIdClick }) => {
  function mapIdsToStory(ids: number[]) {
    return Promise.all(ids.map(id => getItem(id)));
  }

  const [, setStoryIds] = useState([]);
  const [stories, setStories] = useState([]);
  const [pagination] = useState(1);
  const [category] = useState(Categories.Best);

  useEffect(() => {
    const fetchData = async () => {
      const ids = await getStoryIds(category);

      setStoryIds(ids);
      setStories(await mapIdsToStory(ids.slice(pagination * 50, pagination * 50 + 50)));
    }
    fetchData();
  }, [category]);

  if (!stories.length) {
    return null;
  }

  return (
    <>
      <div>HackerNews Reader</div>
      <div className='sidebar-panel'>
        <ul>
          {stories.map((story, idx) => (
            <li key={`story-${idx}`}>
              <SidebarRow story={story} index={pagination + idx} handleStoryIdClick={handleStoryIdClick} />
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .sidebar-panel {
          position: fixed;
          height: 100%;
          width: inherit;
        }

        ul {
          height: 100%;
          overflow-y: auto;
        }

        ul > li:nth-of-type(odd) {
          background-color: #e0e0e0;
        }

        li {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default SidebarPanel;
