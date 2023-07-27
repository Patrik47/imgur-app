import React from 'react';
import Avatar from '../../../user-avatar.png';
import formatTimeElapsed from '../functions/formatTimeElapsed';
import separateNumberDigitsWithComas from '../functions/localeNumber';
import './GalleryComments.css';
import DownvoteSmall from '../../icons/DownvoteSmall';
import UpvoteSmall from '../../icons/UpvoteSmall';

export default function GalleryReplies(props) {
  return (
    <div className="gallery-reply" style={{ display: props.expanded ? null : 'none' }}>
      {props.replies.map((reply, id) => (
        <div key={id} className="gallery-comment">
          <div className="gallery-comment-wrapper">
            <div className="gallery-comment-container">
              <div className="gallery-comment-header">
                <div className="gallery-comment-avatar">
                  <img src={Avatar} width={24} alt="comment-author-avatar"></img>
                </div>
                <span className="gallery-comment-author-name">{reply.author}</span>
                <span style={{ marginLeft: 8 + 'px', marginRight: 8 + 'px' }}>•</span>
                <span>
                  {formatTimeElapsed(reply.date_published)} ago via {reply.device}
                </span>
                <div className="comment-menu-space"></div>
              </div>
              <div className="gallery-comment-body">
                <span>{reply.comment}</span>
              </div>
              <div className="gallery-comment-actions">
                <div className="gallery-comment-upvote">
                  <UpvoteSmall />
                </div>
                <span>{separateNumberDigitsWithComas(reply.upvotes)}</span>
                <div className="gallery-comment-downvote">
                  <DownvoteSmall />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
