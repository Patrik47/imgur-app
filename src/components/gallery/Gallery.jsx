import React from 'react';
import Navbar from '../main-app/header/Navbar';
import Footer from '../main-app/footer/Footer';
import GalleryContentWrapper from './content-wrapper/GalleryContentWrapper';

function Gallery() {
  return (
    <div>
      <Navbar background={false} />
      <GalleryContentWrapper />
      <Footer />
    </div>
  );
}

export default Gallery;
