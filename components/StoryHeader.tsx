
import React from 'react';

interface Props {
  by: string,
  score: number,
  time: number,
  title: string,
  url: string
}

const StoryHeader: React.FC<Props> = ({ by, score, time, title, url }) => {
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
