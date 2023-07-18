import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import Message from "./Message";
import ChangeCover from "./ChangeCover";

export default function Header() {
    return (
        <div className="header">
            <Navbar />
            <Message />
            <div style={{marginBottom: 150 + 'px'}}></div>
            <ChangeCover />
        </div>
    );
};
