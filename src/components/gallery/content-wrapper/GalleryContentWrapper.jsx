import React from 'react';
import './GalleryContentWrapper.css';
import MainGalleryContainer from '../main/MainGalleryContainer';

function GalleryContentWrapper() {
  return (
    <div className="gallery-content-wrapper">
      <div className="gallery">
        <MainGalleryContainer />
      </div>
    </div>
  );
}

export default GalleryContentWrapper;
