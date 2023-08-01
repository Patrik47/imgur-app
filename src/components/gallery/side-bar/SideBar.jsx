import React, { useEffect, useState } from 'react';
import './SideBar.scss';
import generateRandomPosts from '../functions/generateRandomPost';

function SideBar() {
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    setRandomPosts(generateRandomPosts());
  }, []);

  return (
    <div className="sidebar-container">
      <div className="top-sticky">
        <h3>Random</h3>
        <div className="sidebar-posts">
          {randomPosts.map((randomPost, i) => {
            return (
              <div className="random-post-container" key={i}>
                <div className="random-post-image">
                  <img src={randomPost.url} alt="random_post"></img>
                </div>
                <div className="random-post-text">{randomPost.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
