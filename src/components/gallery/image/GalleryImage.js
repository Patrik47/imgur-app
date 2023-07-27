import React from 'react';
import './GalleryImage.css';

export default function GalleryImage(props) {
  console.log(props.image);
  return (
    <div className="media-image">
      <div className="media-image-container">
        <img className="image" src={props.image} alt="preview"></img>
      </div>
    </div>
  );
}
