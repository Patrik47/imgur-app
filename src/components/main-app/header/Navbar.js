import React from 'react';
import './Header.css';
import logo from '../../../imgur-logo.png';
import SearchBar from './search-bar/SearchBar';

export default function Navbar(props) {
  return (
    <div
      className="navbar-container"
      style={{
        backgroundColor: props.background ? null : '#1d2951',
        position: props.background ? null : 'fixed',
        right: props.background ? null : 0,
        left: props.background ? null : 0,
        zIndex: props.background ? null : 2
      }}>
      <div className="navbar-container-left">
        <a href="http://localhost:3000/">
          <img
            src={logo}
            alt="logo"
            width={94}
            height={36}
            onClick={() => (window.location.href = '/')}></img>
        </a>
        <button type="button" className="navbar-button" id="new-post-button">
          <img
            src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.da483e9d9559c3b4e912.svg"
            alt="button-icon-link"></img>
          New post
        </button>
      </div>
      <div className="navbar-container-center">
        <SearchBar />
      </div>
      <div className="navbar-container-right">
        <button type="button" className="navbar-button" id="ad-free-button">
          Go Ad-Free
        </button>
        <button type="button" className="navbar-button" id="sign-in-button">
          Sign in
        </button>
        <button type="button" className="navbar-button" id="sign-up-button">
          Sign up
        </button>
      </div>
    </div>
  );
}
