import React from "react";
import ButtonsBar from "./ButtonsBar";
import "./MainGallery.css"
import GalleryHeader from "./GalleryHeader";
import GalleryImage from "./GalleryImage";
import GalleryComments from "./GalleryComments";

export default function MainGalleryContainer(props) {
    return (
        <div className="main-gallery-container">
            <div className="gallery-buttons-bar">
                <ButtonsBar data={props.data} />
            </div>
            <div className="gallery-wrapper">
                <div className="gallery-content">
                    <div className="gallery-description">
                        <GalleryHeader data={props.data}/>
                    </div>
                    <div className="gallety-image-container">
                        <GalleryImage data={props.data}/>
                    </div>
                    <div className="gallery-comments-list">
                        <GalleryComments data={props.data} />
                    </div>
                </div>
            </div>
        </div>
    );
}