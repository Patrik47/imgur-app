import React from 'react';
import './GalleryHeader.scss';
import userLogo from '../../../user-avatar.png';
import formatTimeElapsed from '../functions/formatTimeElapsed';
import separateNumberDigitsWithComas from '../functions/localeNumber';

function GalleryHeader(props) {
  return (
    <>
      <div className="gallery-title">
        <div className="title-row">
          <span>{props.data.title}</span>
        </div>
      </div>
      <div className="author-line">
        <img alt="author-avatar" src={userLogo}></img>
        <div className="author-info">
          <div className="author-name">
            <span>{props.data.author}</span>
          </div>
          <div className="author-meta">
            <span>{separateNumberDigitsWithComas(props.data.views)} Views</span>
            <span>•</span>
            <span>{formatTimeElapsed(props.data.date)} ago</span>
            <span>•</span>
            <span>via</span>
            <span>{props.data.device}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default GalleryHeader;
