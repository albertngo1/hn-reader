import React, { FC, useState } from 'react';
import SidebarPanel from '../components/SidebarPanel';
import Story from '../components/Story';
import { Row, Col } from 'react-bootstrap';

const App: FC = () => {
  const [storyId, setStoryId] = useState<number | null>(23426154);

  const handleStoryIdClick = (id: number) => setStoryId(id);

  return (
    <>
      <Row>
        <Col md='2'>
          <SidebarPanel handleStoryIdClick={handleStoryIdClick} />
        </Col>
        <Col md='10'>
          <Story storyId={storyId} />
        </Col>
      </Row>
    </>
  )
}

export default App;
