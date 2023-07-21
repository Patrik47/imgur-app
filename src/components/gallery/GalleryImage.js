import React from "react";
import { useParams } from "react-router-dom";
import returnPostData from "./returnPostData";

export default function GalleryImage() {
    const params = useParams();
    const post = returnPostData(Number(params.postID));
    return (
        <div className="media-image">
            <div className="media-image-container">
                <img className="image" src={post[0].image} alt="preview"></img>
            </div>
        </div>
    );
}