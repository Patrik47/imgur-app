import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import Message from "./Message";
import ChangeCover from "./ChangeCover";
import Tags from "./Tags";

export default function Header(props) {
    return (
        <div className="header">
            <Navbar background={true}/>
            <Message />
            <Tags />
            <div style={{ marginBottom: 130 + 'px' }}></div>
            <ChangeCover  openMain={props.openMain} openAlternative={props.openAlternative}
                mainOption={props.mainOption} alternativeOption={props.alternativeOption}
                handleAlternativeOptionSelection={props.handleAlternativeOptionSelection} handleMainOptionSelection={props.handleMainOptionSelection}
                handleButtonClick={props.handleButtonClick} handleDropdownOptionsReset={props.handleDropdownOptionsReset}
                masonryLayout={props.masonryLayout} handleLayout={props.handleLayout}/>
        </div>
    );
};
