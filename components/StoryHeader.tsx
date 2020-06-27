/* eslint-disable react/prop-types */

import React, { FC } from 'react';
import psl from 'psl';
import { format } from 'timeago.js';
import { extractHostname } from '../utils/utils';

interface Props {
  by: string,
  score: number,
  time: number,
  title: string,
  url: string
}

interface IUrlHtmlOpts {
  parentheses: boolean
}

const StoryHeader: FC<Props> = ({ by, score, time, title, url }) => {
  const urlHtml = (innerText: string, opts?: IUrlHtmlOpts) => {
    return (
      <>
        {opts && opts.parentheses && '('}
        <a rel='noreferrer' target='_blank' href={url} >
          <span>{innerText}</span>
        </a>
        {opts && opts.parentheses && ')'}

        <style jsx>{`
          span:hover {
            text-decoration: underline;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <div className='container'>
        <div>
          {urlHtml(title)} {url && urlHtml(psl.get(extractHostname(url)), { parentheses: true })}
        </div>
        <div>
          {score} points by {by} {format(time.toString() + '000', 'en_US')}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export default StoryHeader;
