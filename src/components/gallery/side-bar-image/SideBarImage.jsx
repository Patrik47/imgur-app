import React, { useState, useEffect, useRef } from 'react';
import './SideBarImage.scss';
import { fakerEN as faker } from '@faker-js/faker';
import { ClipLoader } from 'react-spinners';

export default function SideBarImage() {
  const [image, setImage] = useState();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const previousImage = usePrevious(image);

  const fetchImage = async () => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
    const api_key = 'live_OkgDAFfCVmtyTyzZpjJpwx8zsUT7sjU0hTuTKQznJjP6GKmCPr8vA8QtblME4KMp';

    await fetch(url, {
      headers: {
        'x-api-key': api_key
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imageData = data;
        for (let i = 0; i < imageData.length; i++) {
          imageData[i].altID = i;
          imageData[i].title = faker.word.words(Math.floor(Math.random() * 3) + 5);
          imageData[i].author = faker.person.fullName();
          imageData[i].device = faker.helpers.arrayElement(['Android', 'iPhone', 'Web']);
          imageData[i].long_description = faker.word.words(Math.floor(Math.random() * 50) + 10);
          imageData[i].user_submitted = faker.datatype.boolean();
          imageData[i].upvotes = faker.number.int({ min: -10, max: 150000 });
          imageData[i].number_of_comments = faker.number.int({ min: 0, max: 150 });
          imageData[i].date = faker.date.between({
            from: '2022-01-01T00:00:00.000Z',
            to: '2023-08-02T00:00:00.000Z'
          });
          imageData[i].views = faker.number.int({ min: 0, max: 150000 });
        }
        setImage(imageData[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    if (image !== undefined && previousImage !== undefined) {
      setLoadingComplete(true);
    }
  }, [image]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  return (
    <>
      {loadingComplete ? (
        <>
          <div className="random-post-image">
            <img src={image.url} alt="random_post"></img>
          </div>
          <div className="random-post-text">{image.title}</div>
        </>
      ) : (
        <div className="small-spinner">
          <ClipLoader
            color={'#b4b9c2'}
            loading={true}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
}
