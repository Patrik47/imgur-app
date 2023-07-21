import React from "react";
import ButtonsBar from "./ButtonsBar";
import "./MainGallery.css"
import GalleryHeader from "./GalleryHeader";
import GalleryImage from "./GalleryImage";

export default function MainGalleryContainer() {
    return (
        <div className="main-gallery-container">
            <div className="gallery-buttons-bar">
                <ButtonsBar />
            </div>
            <div className="gallery-wrapper">
                <div className="gallery-content">
                    <div className="gallery-description">
                        <GalleryHeader />
                    </div>
                    <div className="gallety-image-container">
                        <GalleryImage />
                    </div>
                    <div className="gallery-comments-list">

                    </div>
                </div>
            </div>
        </div>
    );
}