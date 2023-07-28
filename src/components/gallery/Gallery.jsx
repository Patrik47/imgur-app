import React from 'react';
import Navbar from '../main-app/header/Navbar';
import Footer from '../main-app/footer/Footer';
import GalleryContentWrapper from './content-wrapper/GalleryContentWrapper';
import useScrollDirection from '../useScrollDirection';
import BackToTop from '../main-app/footer/BackToTop';

function Gallery() {
  const isHidden = useScrollDirection();
  return (
    <div>
      <Navbar background={false} />
      <GalleryContentWrapper />
      <Footer isHidden={isHidden} />
      <BackToTop isHidden={isHidden} />
    </div>
  );
}
export default Gallery;
