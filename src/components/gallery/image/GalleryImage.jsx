import React from 'react';
import './GalleryImage.css';

function GalleryImage(props) {
  return (
    <div className="media-image">
      <div className="media-image-container">
        <img className="image" src={props.image} alt="preview"></img>
      </div>
    </div>
  );
}
export default GalleryImage;
