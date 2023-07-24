import React from "react";

export default function GalleryImage(props) {
    return (
        <div className="media-image">
            <div className="media-image-container">
                <img className="image" src={props.data.image} alt="preview"></img>
            </div>
        </div>
    );
}