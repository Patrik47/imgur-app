import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import GalleryContentWrapper from "./GalleryContentWrapper";
import { useParams } from "react-router-dom";
import PostData from "./PostData";

export default function Gallery() {
    const params = useParams();
    const post = PostData(Number(params.postID));
    return (
        <div>
            <Navbar background={false} />
            <GalleryContentWrapper data={post[0]} />
            <Footer />
        </div>
    );
}