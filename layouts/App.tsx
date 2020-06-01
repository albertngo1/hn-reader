
import React, { Component, MouseEvent } from 'react';
import SidebarPanel from '../components/SidebarPanel';
import Story from '../components/Story';

interface AppState {
  storyId: number;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      storyId: null
    }
  }

  handleStoryIdClick = (e: MouseEvent, id: number) => {
    e.preventDefault();

    this.setState({ storyId: id });
  }

  render() {
    const { storyId } = this.state;
    console.log(storyId)
    return (
      <>
      <div className='container'>
        <div className='sidebar-panel-container'>
          <SidebarPanel handleStoryIdClick={this.handleStoryIdClick} />
        </div>
        <Story storyId={storyId} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: horizontal;
        }

        .sidebar-panel-container {
          width: 20%;
        }
      `}</style>
      </>
    )
  }
}

export default App;
