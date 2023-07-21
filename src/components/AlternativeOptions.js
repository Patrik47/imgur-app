import React from "react";
import "./ChangeCover.css";

const mostViralOptions = [
    "POPULAR",
    "NEWEST",
    "BEST",
    "RANDOM"
];

const userSubmittedOptions = [
    "POPULAR",
    "RISING",
    "NEWEST"
];

const highestScoringOptions = [
    "TODAY",
    "WEEK",
    "MONTH",
    "YEAR",
    "ALL TIME"
];

export default function AlternativeOptions(props) {
    console.log(props);
    if (props.mainSelectedOption === 'MOST VIRAL') {
        return (
            <div className="dropdown-list">
                {mostViralOptions.map((option, i) => {
                    return option === props.alternateOptionSelected ? (
                        <div className="dropdown-option" key={i} onClick={props.handleAlternativeOptionSelection} style={{ fontWeight: 'bold', color: 'white' }}>{option}</div>
                    ) : (
                        <div className="dropdown-option" key={i} onClick={props.handleAlternativeOptionSelection}>{option}</div>
                    );
                })}
            </div>
        );
    } else if (props.mainSelectedOption === 'USER SUBMITTED') {
        return (
            <div className="dropdown-list">
                {userSubmittedOptions.map((option, i) => {
                    return option === props.alternateOptionSelected ? (
                        <div className="dropdown-option" key={i} onClick={props.handleAlternativeOptionSelection} style={{ fontWeight: 'bold', color: 'white' }}>{option}</div>
                    ) : (
                        <div className="dropdown-option" key={i} onClick={props.handleAlternativeOptionSelection}>{option}</div>
                    );
                })}
            </div>
        );
    } else if (props.mainSelectedOption === 'HIGHEST SCORING') {
        return (
            <div className="dropdown-list">
                {highestScoringOptions.map((option, i) => {
                    return option === props.alternateOptionSelected ? (
                        <div className="dropdown-option" key={i} onClick={props.handleAlternativeOptionSelection} style={{ fontWeight: 'bold', color: 'white' }}>{option}</div>
                    ) : (
                        <div className="dropdown-option" key={i} onClick={props.handleAlternativeOptionSelection}>{option}</div>
                    );
                })}
            </div>
        );
    }
}