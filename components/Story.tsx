/* eslint-disable react/prop-types */
import React, { FC, useState, useEffect } from 'react';
import { getItem } from '../utils/network';
import StoryHeader from './StoryHeader';
import StoryContent from './StoryContent';
import { Row, Col, Button } from 'react-bootstrap';

interface Props {
  storyId: number;
}

const Story: FC<Props> = ({ storyId }) => {
  const [story, setStory] = useState(null);
  const [loadedCommentIndex, setLoadedCommentIndex] = useState(1);

  useEffect(() => {
    getItem(storyId)
      .then((res: string) => setStory(res));
  }, [storyId]);

  if (!story) {
    return null;
  }

  const { by, score, time, title, url, kids: commentIds, descendants } = story;

  return (
    <>
    <div className='container'>
      <StoryHeader by={by} score={score} time={time} title={title} url={url} descendants={descendants} />

      <div className='storycontent-container'>
          <StoryContent loadedCommentIndex={loadedCommentIndex} commentIds={commentIds}/>
      </div>

      {(loadedCommentIndex < commentIds.length) &&
        (<Row>
          <Col xs='12'>
            <Button onClick={() => setLoadedCommentIndex(loadedCommentIndex + 2)}>Load more</Button>
          </Col>
          <Col xs='12' className='mt-2'>
            <Button onClick={() => setLoadedCommentIndex(commentIds.length)}>Load all</Button>
          </Col>
        </Row>)
      }
    </div>

    <style jsx>{`
      .storycontent-container {
        padding-top: 2rem;
      }

      a {
        cursor: pointer;
      }
    `}</style>
    </>
  )
}

export default Story;
