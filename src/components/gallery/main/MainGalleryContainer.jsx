import React, { useEffect, useState } from 'react';
import EngagementBar from '../engagement-bar/EngagementBar';
import './MainGalleryContainer.scss';
import GalleryHeader from '../header/GalleryHeader';
import GalleryImage from '../image/GalleryImage';
import { useParams } from 'react-router-dom';
import GalleryCommentSection from '../comment-section/GalleryCommentSection';
import Spinner from '../../spinners/Spinner';

function MainGalleryContainer() {
  const params = useParams();
  const [image, setImage] = useState([]);
  const [postData, setPostData] = useState(undefined);

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
        setImage(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    let data = localStorage.getItem('post');
    if (data !== undefined) {
      setPostData(JSON.parse(data));
    }
  }, [image]);

  return (
    <div className="main-gallery-container">
      {postData ? (
        <>
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
              <GalleryCommentSection commentsTotal={postData.number_of_comments} />
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
export default MainGalleryContainer;
