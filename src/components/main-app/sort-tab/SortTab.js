import React from 'react';
import './SortTab.css';
import { MdArrowDropDown } from 'react-icons/md';
import AlternativeOptions from './AlternativeOptions';
import DropDownTriangle from '../../icons/DropDownTriangle';
import LayoutOptionMasonry from '../../icons/LayoutOptionMasonry';
import LayoutOptionGrid from '../../icons/LayoutOptionGrid';
import ContentControls from '../../icons/ContentControls';
import Autoplay from '../../icons/Autoplay';

export default function SortTab(props) {
  const mainOptions = ['MOST VIRAL', 'USER SUBMITTED', 'HIGHEST SCORING'];
  return (
    <div className="change-cover">
      <div className="cover-sort">
        <span className="cover-sort-wrapper">
          <div className="dropdown-title" onClick={() => props.handleButtonClick('main')}>
            <span style={{ marginRight: 5 + 'px' }}>{props.mainOption}</span>
            <MdArrowDropDown size={20} />
          </div>
          {props.openMain && (
            <div className="dropdown-menu">
              <DropDownTriangle />
              <div className="dropdown-list">
                {mainOptions.map((option, i) => {
                  return (
                    <div
                      className="dropdown-option"
                      key={i}
                      onClick={props.handleMainOptionSelection}
                      style={{
                        fontWeight: props.mainOption === option ? 'bold' : 'normal',
                        color: props.mainOption === option ? 'white' : null
                      }}>
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </span>
        <span className="cover-sort-wrapper">
          <div className="dropdown-title" onClick={() => props.handleButtonClick('other')}>
            <span style={{ marginRight: 5 + 'px' }}>{props.alternativeOption}</span>
            <MdArrowDropDown size={20} />
          </div>
          {props.openAlternative && (
            <div className="dropdown-menu">
              <DropDownTriangle />
              <AlternativeOptions
                mainSelectedOption={props.mainOption}
                handleAlternativeOptionSelection={props.handleAlternativeOptionSelection}
                alternateOptionSelected={props.alternativeSelectedOption}
              />
            </div>
          )}
        </span>
      </div>
      <div className="change-view">
        <div className="change-appearance">
          <ContentControls />
        </div>
        <div className="change-appearance" style={{ marginLeft: 16 + 'px' }}>
          <Autoplay />
        </div>
        <div
          className="change-appearance"
          onClick={props.handleLayout}
          style={{ marginLeft: 16 + 'px', display: props.masonryLayout ? null : 'none' }}>
          <LayoutOptionMasonry />
        </div>
        <div
          className="change-appearance"
          onClick={props.handleLayout}
          style={{ marginLeft: 16 + 'px', display: !props.masonryLayout ? null : 'none' }}>
          <LayoutOptionGrid />
        </div>
      </div>
    </div>
  );
}
