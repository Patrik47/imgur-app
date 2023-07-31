import React from 'react';
import './GalleryComments.scss';
import Avatar from '../../../../user-avatar.png';
import formatTimeElapsed from '../../functions/formatTimeElapsed';
import separateNumberDigitsWithComas from '../../functions/localeNumber';
import GalleryReplies from '../replies/GalleryReplies';
import RepliesData from '../../../../replies.json';
import UpvoteSmall from '../../../icons/UpvoteSmall';
import DownvoteSmall from '../../../icons/DownvoteSmall';
import ChevronDown from '../../../icons/ChevronDown';
import { useState, useEffect } from 'react';
import RepliesHandler from '../replies/RepliesHandler';

function GalleryComments(props) {
  const [expandedComments, setExpandedComments] = useState([]);

  useEffect(() => {
    if (!props.repliesExpanded) {
      setExpandedComments([]);
    } else {
      setExpandedComments(props.comments);
    }
  }, [props.repliesExpanded, props.comments]);

  function addOrRemoveFromExpandedArray(comment) {
    if (isInExpandedArray(comment)) {
      setExpandedComments(expandedComments.filter((e) => e.comment_id !== comment.comment_id));
    } else {
      setExpandedComments(expandedComments.concat(comment));
    }
  }

  function isInExpandedArray(comment) {
    if (expandedComments.includes(comment)) {
      return true;
    } else {
      return false;
    }
  }

  function fetchReplies(id) {
    return RepliesData.filter((reply) => reply.comment_id === id);
  }

  function fetchNumberOfReplies(id) {
    return RepliesData.filter((reply) => reply.comment_id === id).length;
  }

  return (
    <div className="gallery-comments-list">
      <div className="comments-list-inner">
        {props.comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="gallery-comment">
              <div className="gallery-comment-wrapper">
                <div className="gallery-comment-container">
                  <div className="gallery-comment-header">
                    <div className="gallery-comment-avatar">
                      <img src={Avatar} width={24} alt="comment-author-avatar"></img>
                    </div>
                    <span className="gallery-comment-author-name">{comment.author}</span>
                    <span style={{ marginLeft: 8 + 'px', marginRight: 8 + 'px' }}>•</span>
                    <span>
                      {formatTimeElapsed(comment.date_published)} ago via {comment.device}
                    </span>
                    <div className="comment-menu-space"></div>
                  </div>
                  <div className="gallery-comment-body">
                    <span>{comment.comment}</span>
                  </div>
                  <div className="gallery-comment-actions">
                    <div className="gallery-comment-upvote">
                      <UpvoteSmall />
                    </div>
                    <span>{separateNumberDigitsWithComas(comment.upvotes)}</span>
                    <div className="gallery-comment-downvote">
                      <DownvoteSmall />
                    </div>
                    <RepliesHandler
                      repliesNumber={fetchNumberOfReplies(comment.comment_id)}
                      addOrRemove={addOrRemoveFromExpandedArray}
                      isInArray={isInExpandedArray}
                      comment={comment}
                    />
                  </div>
                </div>
              </div>
              <GalleryReplies
                replies={fetchReplies(comment.comment_id)}
                expanded={isInExpandedArray(comment)}
              />
              <hr
                style={{
                  borderColor: '#4a5787',
                  width: 75 + '%',
                  maxWidth: 800 + 'px',
                  marginLeft: 0
                }}></hr>
            </div>
          );
        })}
      </div>
      <div className="load-more" style={{ display: props.allCommentsLoaded ? 'none' : null }}>
        <div className="load-more-container">
          <button className="load-more-button" onClick={() => props.handleCommentsLoadedEvent()}>
            Load more commments
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
export default GalleryComments;
