import React from "react";
import ButtonsBar from "./ButtonsBar";
import "./MainGallery.css"
import GalleryHeader from "./GalleryHeader";
import GalleryImage from "./GalleryImage";
import GalleryComments from "./GalleryComments";

class MainGalleryContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            expandReplies: false
        };
    }

    handleExpandAllEvent = () => {
        this.setState({
            expandReplies: !this.state.expandReplies
        });
    }

    render() {
        return (
            <div className="main-gallery-container">
                <div className="gallery-buttons-bar">
                    <ButtonsBar data={this.props.data} />
                </div>
                <div className="gallery-wrapper">
                    <div className="gallery-content">
                        <div className="gallery-description">
                            <GalleryHeader data={this.props.data} />
                        </div>
                        <div className="gallety-image-container">
                            <GalleryImage data={this.props.data} />
                        </div>
                        <div className="gallery-comments-info">
                            <div className="gallery-comments-info-headline">
                                <span>{this.props.data.number_of_comments} Comments</span>
                            </div>
                            <div className="gallery-comments-info-expandall" onClick={() => this.handleExpandAllEvent()} style={{ display: this.state.expandReplies ? "none" : null }}>
                                <span>Expand All</span>
                                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Expand</title><path fill="#DADCE2" fillRule="evenodd" clipRule="evenodd" d="M13.0004 8C13.0004 8.55229 12.5527 9 12.0004 9C11.4481 9 11.0004 8.55229 11.0004 8V5H8.00037C7.44808 5 7.00037 4.55228 7.00037 4C7.00037 3.44772 7.44808 3 8.00037 3H12.0004C12.5505 3 12.9969 3.44423 13.0003 3.99353L13.0004 4V8ZM3 8C3 7.44772 3.44772 7 4 7C4.55228 7 5 7.44772 5 8V11H8C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13H4C3.44772 13 3 12.5523 3 12V8Z"></path></svg>
                            </div>
                            <div className="gallery-comments-info-expandall" onClick={() => this.handleExpandAllEvent()} style={{ display: !this.state.expandReplies ? "none" : null }}>
                                <span>Collapse All</span>
                                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Expand</title><path fill="#DADCE2" fillRule="evenodd" clipRule="evenodd" d="M13.0004 8C13.0004 8.55229 12.5527 9 12.0004 9C11.4481 9 11.0004 8.55229 11.0004 8V5H8.00037C7.44808 5 7.00037 4.55228 7.00037 4C7.00037 3.44772 7.44808 3 8.00037 3H12.0004C12.5505 3 12.9969 3.44423 13.0003 3.99353L13.0004 4V8ZM3 8C3 7.44772 3.44772 7 4 7C4.55228 7 5 7.44772 5 8V11H8C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13H4C3.44772 13 3 12.5523 3 12V8Z"></path></svg>
                            </div>
                            <div className="gallery-comments-info-sort">
                                <div className="gallery-comments-info-dropdown-headline">
                                    <span>Best</span>
                                    <img className="iconChevronDown" src="https://s.imgur.com/desktop-assets/desktop-assets/chevron-down-w.c9d88e9dd4a2c859ee05.svg" width="15" alt="chevron-bar"></img>
                                </div>
                                <div className="gallery-comments-info-dropdown-bottom" style={{ display: "none" }}>
                                    <svg width="24" height="8" viewBox="0 0 24 8" className="Dropdown-triangle" fill="none" xmlns="http://www.w3.org/2000/svg"><title>icon</title><path fill="#ffffff" d="M10.3359 1.1094C11.3436 0.437601 12.6564 0.437601 13.6641 1.1094L24 8L3.05823e-09 8L10.3359 1.1094Z"></path></svg>
                                    <div className="dropdown-list">
                                        <div className="dropdown-item">Best</div>
                                        <div className="dropdown-item">Top</div>
                                        <div className="dropdown-item">Newest</div>
                                        <div className="dropdown-item">Oldest</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-comments-list">
                            <GalleryComments data={this.props.data} expandAll={this.state.expandReplies} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainGalleryContainer;