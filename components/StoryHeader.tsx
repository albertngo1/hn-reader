/* eslint-disable react/prop-types */

import React, { FC } from 'react';
import psl from 'psl';
import { format } from 'timeago.js';
import { extractHostname } from '../utils/utils';
import { COLORS } from '../utils/colors';
import { Row, Col } from 'react-bootstrap';

interface Props {
  by: string,
  score: number,
  time: number,
  title: string,
  url: string,
  descendants: number
}

interface IUrlHtmlOpts {
  parentheses: boolean
}

const StoryHeader: FC<Props> = ({ by, score, time, title, url, descendants }) => {
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
      <Row>
        <Col sm={12}>
          {urlHtml(title)} {' '}
          <span className='story-link'>
            {url && urlHtml(psl.get(extractHostname(url)), { parentheses: true })}
          </span>
        </Col>
        <Col sm={12}>
          <span className='story-sub-content'>
            {score} points by {by} {format(time.toString() + '000', 'en_US')} | {descendants} comments
          </span>
        </Col>
      </Row>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }

        .story-link {
          color: ${COLORS.grey};
          font-size: 0.75rem;
        }

        .story-sub-content {
          color: ${COLORS.grey};
          font-size: 0.8rem;
        }
      `}</style>
    </>
  )
}

export default StoryHeader;
