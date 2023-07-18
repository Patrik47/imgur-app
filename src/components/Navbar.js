import React from "react";
import "./Header.css";
import logo from "../imgur-logo.png";
import Button from '@mui/material/Button';
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-container-left"> 
                <a href="http://localhost:3000/">
                    <img src={logo} alt="logo" width={94} height={36}></img>
                </a>
                <Button variant="contained" disableElevation color="success">
                    <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.da483e9d9559c3b4e912.svg"
                    alt="button-icon-link"></img>
                    New post
                </Button>
            </div>
            <div className="navbar-container-center">
                <SearchBar />
            </div>
            <div className="navbar-container-right">
                <Button variant="contained" disableElevation color="success" id="1">
                    Go Ad-Free
                </Button>
                <Button variant="contained" disableElevation color="success" id="2">
                    Sign in
                </Button>
                <Button variant="contained" disableElevation color="success" id="3">
                    Sign up
                </Button>
            </div>
        </div>
    );
}