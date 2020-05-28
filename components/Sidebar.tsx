import React, { Component } from 'react';
import { getItem, getTopStoryIds } from '../util/network';

type SidebarState = {
  topStoryIds: [],
  stories: [],
  pagination: number
}

class Sidebar extends Component<{}, SidebarState> {
  constructor(props) {
    super(props);
    this.state = {
      topStoryIds: [],
      stories: [],
      pagination: 1
    }
  }

  async componentDidMount() {
    const { pagination } = this.state;
    const ids = await getTopStoryIds();

    this.setState({
      topStoryIds: ids,
      stories: await this.mapIdsToStory(ids.slice(pagination * 50, pagination * 50 + 50))
    });
  }

  mapIdsToStory(ids) {
    return Promise.all(ids.map(id => getItem(id)));
  }

  render() {
    const { stories } = this.state;

    if (!stories.length) {
      return null;
    }

    console.log(this.state.stories)

    return (
      <>
      {stories.map((story, idx) => (
        <div key={idx}>{story.by}</div>
      ))}
      </>
    )
  }
}
export default Sidebar;
