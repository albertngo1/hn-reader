
import React, { FC, useState } from 'react';
import SidebarPanel from '../components/SidebarPanel';
import Story from '../components/Story';

const App: FC = () => {
  const [storyId, setStoryId] = useState<number | null>(23426154);

  const handleStoryIdClick = (id: number) => setStoryId(id);

  return (
    <>
      <div className='container'>
        <div className='sidebar-panel-container'>
          <SidebarPanel handleStoryIdClick={handleStoryIdClick} />
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

export default App;
