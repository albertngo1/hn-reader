/* eslint-disable react/prop-types */

import React, { FC } from 'react';
import psl from 'psl';
import { extractHostname } from '../utils/utils';

interface Props {
  by: string,
  score: number,
  time: number,
  title: string,
  url: string
}

const StoryHeader: FC<Props> = ({ by, score, time, title, url }) => (
  <>
    <a href={url} target='_blank' rel="noopener noreferrer">
      <div className='container'>
        <div>
          {by} {score} {time} {title} {psl.get(extractHostname(url))}
        </div>
      </div>
    </a>

    <style jsx>{`
      .container {
        display: flex;
      }

      a {
        padding: 15px;
        background-color: red;
        height: 100%;
      }
    `}</style>
  </>
)

export default StoryHeader;
