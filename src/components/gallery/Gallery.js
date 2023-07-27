import React from 'react';
import Navbar from '../main-app/header/Navbar';
import Footer from '../main-app/footer/Footer';
import GalleryContentWrapper from './content-wrapper/GalleryContentWrapper';
import { useParams } from 'react-router-dom';
import PostData from './functions/PostData';

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
