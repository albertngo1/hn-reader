import React, { Component } from 'react';
import { getItem, getStoryIds, Categories } from '../util/network';
import SidebarRow from './SidebarRow';

type SidebarPanelState = {
  storyIds: number[],
  stories: any[],
  pagination: number,
  category: string
}

type SidebarPanelProps = {};

class SidebarPanel extends Component<SidebarPanelProps, SidebarPanelState> {
  constructor(props: SidebarPanelProps) {
    super(props);

    this.state = {
      storyIds: [],
      stories: [],
      pagination: 1,
      category: Categories.Best
    }
  }

  async componentDidMount() {
    const { pagination, category } = this.state;
    const ids = await getStoryIds(category);

    this.setState({
      storyIds: ids,
      stories: await this.mapIdsToStory(ids.slice(pagination * 50, pagination * 50 + 50))
    });
  }

  mapIdsToStory(ids: number[]) {
    return Promise.all(ids.map(id => getItem(id)));
  }

  render() {
    const { stories, pagination } = this.state;

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
              <SidebarRow story={story} index={pagination + idx} />
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
            overflow-y: scroll;
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
}
export default SidebarPanel;
