
import React from 'react';
import SidebarPanel from '../components/SidebarPanel';
import Story from '../components/Story';

const App: React.FC = () => {
  return (
    <>
    <div className='container'>
      <div className='sidebar-wrapper'>
        <SidebarPanel />
      </div>
      <Story />
    </div>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
      }

      .sidebar-wrapper {
        width: 20%;
      }
    `}</style>
    </>
  )
}

export default App;
