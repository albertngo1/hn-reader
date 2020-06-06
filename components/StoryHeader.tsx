/* eslint-disable react/prop-types */

import React from 'react';
import psl from 'psl';
import { extractHostname } from '../utils/utils';

interface Props {
  by: string,
  score: number,
  time: number,
  title: string,
  url: string
}

const StoryHeader: React.FC<Props> = ({ by, score, time, title, url }) => (
  <>
    <a href={url} target='_blank' rel="noopener noreferrer">
      <div>
        {by} {score} {time} {title} {psl.get(extractHostname(url))}
      </div>
    </a>

    <style jsx>{`
        div {
          height: 100%;
          margin-left: 200px;
        }
      `}</style>
  </>
)

export default StoryHeader;
