import React from 'react';
import './MainPage.css';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import { useState, useEffect, useRef } from 'react';
import sortAndFilter from './sortAndFilter';
import BackToTop from './footer/BackToTop';
import useScrollDirection from '../useScrollDirection';
// import getImages from '../API/getImages';
import { fakerEN as faker } from '@faker-js/faker';

function MainPage() {
  const [openMainCoverOptions, setOpenMainCoverOptions] = useState(false);
  const [openAdditionalCoverOptions, setOpenAdditionalCoverOptions] = useState(false);
  const [mainSelectedOption, setMainSelectedOption] = useState('MOST VIRAL');
  const [alternativeSelectedOption, setAlternativeSelectedOption] = useState('POPULAR');
  const [startingPos, setStartingPos] = useState(0);
  const [allPosts, setAllPosts] = useState([]); // posts all together
  const [posts, setPosts] = useState([]); // displayed posts
  const [filteredPosts, setFilteredPosts] = useState([]); // all posts after filter applied;
  const [isThereMore, setIsThereMore] = useState(true);
  const [masonryLayout, setMasonryLayout] = useState(true);
  const previousPosts = usePrevious(posts);
  const previousFilteredPosts = usePrevious(filteredPosts);
  const isHidden = useScrollDirection();

  const fetchImages = () => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=100`;
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
        let imagesData = data;
        for (let i = 0; i < imagesData.length; i++) {
          imagesData[i].altID = i;
          imagesData[i].title = faker.word.words(Math.floor(Math.random() * 3) + 5);
          imagesData[i].author = faker.person.fullName();
          imagesData[i].device = faker.helpers.arrayElement(['Android', 'iPhone', 'Web']);
          imagesData[i].long_description = faker.word.words(Math.floor(Math.random() * 50) + 10);
          imagesData[i].user_submitted = faker.datatype.boolean();
          imagesData[i].upvotes = faker.number.int({ min: -10, max: 150000 });
          imagesData[i].number_of_comments = faker.number.int({ min: 0, max: 150 });
          imagesData[i].date = faker.date.between({
            from: '2020-01-01T00:00:00.000Z',
            to: '2023-07-27T00:00:00.000Z'
          });
          imagesData[i].views = faker.number.int({ min: 0, max: 150000 });
        }
        setAllPosts(imagesData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (allPosts.length !== 0) {
      setFilteredPosts(sortAndFilter(mainSelectedOption, alternativeSelectedOption, allPosts));
    }
  }, [allPosts]);

  useEffect(() => {
    setFilteredPosts(sortAndFilter(mainSelectedOption, alternativeSelectedOption, allPosts));
    setStartingPos(0);
    setIsThereMore(true);
    setPosts([]);
  }, [mainSelectedOption, alternativeSelectedOption]);

  useEffect(() => {
    if (
      previousFilteredPosts !== filteredPosts ||
      (previousPosts.length !== 0 && posts.length === 0)
    ) {
      fetchData();
    }
  }, [filteredPosts, posts]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  function fetchData() {
    let newPosts = filteredPosts.slice(startingPos, startingPos + 16);
    if (posts.length + newPosts.length === filteredPosts.length) {
      setIsThereMore(false);
    }
    setPosts(posts.concat(newPosts));
    setStartingPos(startingPos + 16);
  }

  function handleDropdownOptionsReset() {
    setOpenAdditionalCoverOptions(false);
    setOpenMainCoverOptions(false);
  }

  function handleButtonClick(option) {
    if (option === 'main') {
      setOpenMainCoverOptions(!openMainCoverOptions);
    } else {
      setOpenAdditionalCoverOptions(!openAdditionalCoverOptions);
    }
  }

  function handleMainOptionSelection(event) {
    handleDropdownOptionsReset();
    if (event.target.innerText === 'MOST VIRAL' || event.target.innerText === 'USER SUBMITTED') {
      setMainSelectedOption(event.target.innerText);
      setAlternativeSelectedOption('POPULAR');
    } else {
      setMainSelectedOption(event.target.innerText);
      setAlternativeSelectedOption('TODAY');
    }
  }

  function handleAlternativeOptionSelection(event) {
    handleDropdownOptionsReset();
    setAlternativeSelectedOption(event.target.innerText);
  }

  function handleLayoutChange() {
    setMasonryLayout(!masonryLayout);
  }

  return (
    <div className="main-page">
      <Header
        openMain={openMainCoverOptions}
        openAlternative={openAdditionalCoverOptions}
        mainOption={mainSelectedOption}
        alternativeOption={alternativeSelectedOption}
        handleAlternativeOptionSelection={handleAlternativeOptionSelection}
        handleMainOptionSelection={handleMainOptionSelection}
        handleButtonClick={handleButtonClick}
        handleDropdownOptionsReset={handleDropdownOptionsReset}
        masonryLayout={masonryLayout}
        handleLayout={handleLayoutChange}
      />
      <Body posts={posts} more={isThereMore} fetchData={fetchData} masonryLayout={masonryLayout} />
      <Footer isHidden={isHidden} />
      <BackToTop isHidden={isHidden} />
    </div>
  );
}
export default MainPage;
