import React from 'react';
import Navbar from './Navbar';
import './Header.scss';
import RandomHeading from './RandomHeading';
import SortTab from '../sort-tab/SortTab';
import Tags from './tags/Tags';

function Header(props) {
  return (
    <div className="header">
      <Navbar background={true} />
      <RandomHeading />
      <Tags />
      <div style={{ marginBottom: 130 + 'px' }}></div>
      <SortTab
        openMain={props.openMain}
        openAlternative={props.openAlternative}
        mainOption={props.mainOption}
        alternativeOption={props.alternativeOption}
        handleAlternativeOptionSelection={props.handleAlternativeOptionSelection}
        handleMainOptionSelection={props.handleMainOptionSelection}
        handleButtonClick={props.handleButtonClick}
        handleDropdownOptionsReset={props.handleDropdownOptionsReset}
        masonryLayout={props.masonryLayout}
        handleLayout={props.handleLayout}
      />
    </div>
  );
}
export default Header;
