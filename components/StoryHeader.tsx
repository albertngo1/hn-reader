
import React from 'react';

interface Props {
  story: any
}

const StoryHeader: React.FC<Props> = ({ story }) => {
  return (
    <>

      <style jsx>{`
      div {
        height: 100%;
        margin-left: 200px;
      }
    `}</style>
    </>
  )
}

export default StoryHeader;
