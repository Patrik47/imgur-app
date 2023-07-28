import React from 'react';
import EngagementBar from '../engagement-bar/EngagementBar';
import './MainGalleryContainer.css';
import GalleryHeader from '../header/GalleryHeader';
import GalleryImage from '../image/GalleryImage';
import { useParams } from 'react-router-dom';
import loadPostData from '../functions/LoadPostData';
import GalleryCommentSection from '../comment-section/GalleryCommentSection';

function MainGalleryContainer() {
  const params = useParams();
  const post = loadPostData(Number(params.postID))[0];
  return (
    <div className="main-gallery-container">
      <div className="gallery-buttons-bar">
        <EngagementBar data={post} />
      </div>
      <div className="gallery-wrapper">
        <div className="gallery-content">
          <div className="gallery-description">
            <GalleryHeader data={post} />
          </div>
          <div className="gallety-image-container">
            <GalleryImage image={post.image} />
          </div>
          <GalleryCommentSection numberOfComments={post.number_of_comments} postID={post.id} />
        </div>
      </div>
    </div>
  );
}
export default MainGalleryContainer;
