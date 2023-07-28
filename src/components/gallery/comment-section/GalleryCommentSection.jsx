import React, { useState } from 'react';
import ExpandAll from '../../icons/ExpandAll';
import CollapseAll from '../../icons/CollapseAll';
import { useEffect } from 'react';
import CommentsData from '../../../comments.json';
import DropDownTriangle from '../../icons/DropDownTriangle';
import GalleryComments from './comments/GalleryComments';
import './GalleryCommentSection.css';

function GalleryCommentSection(props) {
  const [areRepliesExpanded, setAreRepliesExpanded] = useState(false);
  const [areAllCommentsLoaded, setAreAllCommentsLoaded] = useState(false);
  const [comments, setComments] = useState(
    CommentsData.filter((comment) => comment.post_id === props.postID).slice(0, 5)
  );

  useEffect(() => {
    if (areAllCommentsLoaded) {
      setComments(CommentsData.filter((comment) => comment.post_id === props.postID));
    } else {
      setComments(CommentsData.filter((comment) => comment.post_id === props.postID).slice(0, 5));
    }
  }, [areAllCommentsLoaded]);

  function handleRepliesExpandedEvent() {
    setAreRepliesExpanded(!areRepliesExpanded);
  }

  function handleCommentsLoadedEvent() {
    setAreAllCommentsLoaded(!areAllCommentsLoaded);
  }

  return (
    <>
      <div className="gallery-comments-info">
        <div className="gallery-comments-info-headline">
          <span>{props.numberOfComments} Comments</span>
        </div>
        <div
          className="gallery-comments-info-expandall"
          onClick={() => handleRepliesExpandedEvent()}
          style={{ display: areRepliesExpanded ? 'none' : null }}>
          <span>Expand All</span>
          <ExpandAll />
        </div>
        <div
          className="gallery-comments-info-expandall"
          onClick={() => handleRepliesExpandedEvent()}
          style={{ display: !areRepliesExpanded ? 'none' : null }}>
          <span>Collapse All</span>
          <CollapseAll />
        </div>
        <div className="gallery-comments-info-sort">
          <div className="gallery-comments-info-dropdown-headline">
            <span>Best</span>
            <img
              className="iconChevronDown"
              src="https://s.imgur.com/desktop-assets/desktop-assets/chevron-down-w.c9d88e9dd4a2c859ee05.svg"
              width="15"
              alt="chevron-bar"></img>
          </div>
          <div className="gallery-comments-info-dropdown-bottom" style={{ display: 'none' }}>
            <DropDownTriangle />
            <div className="dropdown-list">
              <div className="dropdown-item">Best</div>
              <div className="dropdown-item">Top</div>
              <div className="dropdown-item">Newest</div>
              <div className="dropdown-item">Oldest</div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-comments-list">
        <GalleryComments
          comments={comments}
          repliesExpanded={areRepliesExpanded}
          allCommentsLoaded={areAllCommentsLoaded}
          handleCommentsLoadedEvent={handleCommentsLoadedEvent}
        />
      </div>
    </>
  );
}
export default GalleryCommentSection;
