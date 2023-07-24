import React from "react";
import "./GalleryContentWrapper.css"
import MainGalleryContainer from "./MainGalleryContainer";

export default function GalleryContentWrapper(props) {
    return (
        <div className="gallery-content-wrapper">
            <div className="gallery">
                <MainGalleryContainer data={props.data}/>
            </div>
        </div>
    );
}