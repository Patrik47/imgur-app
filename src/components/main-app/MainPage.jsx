import React from 'react';
import './MainPage.css';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import { useState, useEffect, useRef } from 'react';
import sortAndFilter from './sortAndFilter';
// import BackToTop from './footer/BackToTop';
// import useScrollDirection from './footer/useScrollDirection';

function MainPage() {
  const [openMainCoverOptions, setOpenMainCoverOptions] = useState(false);
  const [openAdditionalCoverOptions, setOpenAdditionalCoverOptions] = useState(false);
  const [mainSelectedOption, setMainSelectedOption] = useState('MOST VIRAL');
  const [alternativeSelectedOption, setAlternativeSelectedOption] = useState('POPULAR');
  const [filteredPosts, setFilteredPosts] = useState(
    sortAndFilter(mainSelectedOption, alternativeSelectedOption)
  );
  const [startingPos, setStartingPos] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isThereMore, setIsThereMore] = useState(true);
  const [masonryLayout, setMasonryLayout] = useState(true);
  const previousPosts = usePrevious(posts);
  const previousFilteredPosts = usePrevious(filteredPosts);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredPosts(sortAndFilter(mainSelectedOption, alternativeSelectedOption));
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
      <Footer />
      {/* {window.scrollY <= 10 ? <Footer /> : <BackToTop />} */}
    </div>
  );
}
export default MainPage;
