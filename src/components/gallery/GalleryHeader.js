import React from "react";
import "./GalleryHeader.css";
import userLogo from "../../user-avatar.png";
import { useParams } from "react-router-dom";
import returnPostData from "./returnPostData";
import formatTimeElapsed from "./formatTimeElapsed";
import separateNumberDigitsWithComas from "./localeNumber";

export default function GalleryHeader() {
    const params = useParams();
    const post = returnPostData(Number(params.postID));
    return (
        <>
            <div className="gallery-title">
                <div className="title-row">
                    <span>{post[0].title}</span>
                </div>
            </div>
            <div className="author-line">
                <img alt="author-avatar" src={userLogo}></img>
                <div className="author-info">
                    <div className="author-name">
                        <span>{post[0].author}</span>
                    </div>
                    <div className="author-meta">
                        <span>{separateNumberDigitsWithComas(post[0].views)} Views</span>
                        <span>•</span>
                        <span>{formatTimeElapsed(post[0].date)}</span>
                        <span>•</span>
                        <span>via</span>
                        <span>{post[0].device}</span>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </>
    );
}