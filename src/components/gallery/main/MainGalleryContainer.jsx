import React, { useEffect, useState } from 'react';
import EngagementBar from '../engagement-bar/EngagementBar';
import './MainGalleryContainer.css';
import GalleryHeader from '../header/GalleryHeader';
import GalleryImage from '../image/GalleryImage';
import { useParams } from 'react-router-dom';
import loadPostData from '../functions/LoadPostData';
import GalleryCommentSection from '../comment-section/GalleryCommentSection';

function MainGalleryContainer() {
  const params = useParams();
  const [image, setImage] = useState([]);

  const fetchImage = () => {
    const url = `https://api.thecatapi.com/v1/images/` + params.postID;
    const api_key = 'live_OkgDAFfCVmtyTyzZpjJpwx8zsUT7sjU0hTuTKQznJjP6GKmCPr8vA8QtblME4KMp';
    fetch(url, {
      headers: {
        'x-api-key': api_key
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setImage(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const postData = loadPostData(Number(params.altID))[0];
  // console.log(postData);
  return (
    <div className="main-gallery-container">
      <div className="gallery-buttons-bar">
        <EngagementBar data={postData} />
      </div>
      <div className="gallery-wrapper">
        <div className="gallery-content">
          <div className="gallery-description">
            <GalleryHeader data={postData} />
          </div>
          <div
            className="gallety-image-container"
            style={{ display: image === [] ? 'none' : null }}>
            <GalleryImage image={image.url} />
          </div>
          <GalleryCommentSection
            numberOfComments={postData.number_of_comments}
            postID={postData.id}
          />
        </div>
      </div>
    </div>
  );
}
export default MainGalleryContainer;
