import React from 'react';
import './EngagementBar.scss';
import formatNumber from '../functions/formatNumber';
import Upvote from '../../icons/Upvote';
import Downvote from '../../icons/Downvote';
import Comments from '../../icons/Comments';
import Share from '../../icons/Share';
import Heart from '../../icons/Heart';

function EngagementBar(props) {
  return (
    <div className="buttons-bar-container">
      <div className="buttons-vote">
        <div className="button-wrapper" id="upvote-button">
          <Upvote />
        </div>
        <div className="button-wrapper">
          <span className="upvotes">{formatNumber(props.data.upvotes)}</span>
        </div>
        <div className="button-wrapper" id="downvote-button">
          <Downvote />
        </div>
        <div className="button-wrapper" id="heart-button">
          <Heart />
        </div>
      </div>
      <div className="buttons-share">
        <div className="share-wrapper">
          <Share />
        </div>
      </div>
      <div className="buttons-comments">
        <div className="comment-icon">
          <Comments />
        </div>
        <div className="comment-label">
          <span>{formatNumber(props.data.number_of_comments)}</span>
        </div>
      </div>
    </div>
  );
}
export default EngagementBar;
