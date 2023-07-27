import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        className="search-bar-textinput"
        placeholder="Images, #tags, @users oh my!"
        type="text"></input>
      <button className="search-button">
        <img
          src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.3bca12abe700ae5ca910.svg"
          alt="searbar-logo"></img>
      </button>
    </div>
  );
}
