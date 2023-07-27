import React from 'react';
import './Header.css';
import logo from '../../../imgur-logo.png';
import SearchBar from './search-bar/SearchBar';
import NewPost from '../../icons/NewPost';

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
          <NewPost />
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
