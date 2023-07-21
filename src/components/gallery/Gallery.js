import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import GalleryContentWrapper from "./GalleryContentWrapper";

export default function Gallery() {
    return (
        <div>
            <Navbar background={false} />
            <GalleryContentWrapper />
            <Footer />
        </div>
    );
}