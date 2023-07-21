import React from "react";
import "./GalleryContentWrapper.css"
import MainGalleryContainer from "./MainGalleryContainer";

export default function GalleryContentWrapper() {
    return (
        <div className="gallery-content-wrapper">
            <div className="gallery">
                <MainGalleryContainer />
            </div>
        </div>
    );
}