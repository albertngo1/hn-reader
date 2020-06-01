
import React from 'react';

interface Props {
  storyId: number;
}

const Story: React.FC<Props> = ({ storyId }) => {
  return (
    <>
    <div>{storyId}</div>
    kasndlaksndlansdkalsndaklsnd
    <style jsx>{`
      div {
        height: 100%;
        margin-left: 200px;
      }
    `}</style>
    </>
  )
}

export default Story;
