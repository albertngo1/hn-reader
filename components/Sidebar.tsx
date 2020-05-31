import React, { Component } from 'react';
import { getItem, getStoryIds, Categories } from '../util/network';
import SidebarRow from './SidebarRow';

type SidebarState = {
  storyIds: number[],
  stories: any[],
  pagination: number,
  category: string
}

type SidebarProps = {};

class Sidebar extends Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
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
      {stories.map((story, idx) => (
        <div key={`story-${idx}`}>
          <SidebarRow story={story} index={pagination + idx} />
        </div>
      ))}
      </>
    )
  }
}
export default Sidebar;
