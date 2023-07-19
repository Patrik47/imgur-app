import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import Message from "./Message";
import ChangeCover from "./ChangeCover";
import Tags from "./Tags";

export default function Header() {
    return (
        <div className="header">
            <Navbar />
            <Message />
            <Tags />
            <div style={{marginBottom: 130 + 'px'}}></div>
            <ChangeCover />
        </div>
    );
};
