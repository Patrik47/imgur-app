import React from 'react';
import ButtonsBar from './ButtonsBar';
import './MainGallery.css';
import GalleryHeader from '../header/GalleryHeader';
import GalleryImage from '../image/GalleryImage';
import GalleryComments from '../comments/GalleryComments';
import ExpandAll from '../../icons/ExpandAll';
import CollapseAll from '../../icons/CollapseAll';
import DropDownTriangle from '../../icons/DropDownTriangle';

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
  };

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
              <GalleryImage image={this.props.data.image} />
            </div>
            <div className="gallery-comments-info">
              <div className="gallery-comments-info-headline">
                <span>{this.props.data.number_of_comments} Comments</span>
              </div>
              <div
                className="gallery-comments-info-expandall"
                onClick={() => this.handleExpandAllEvent()}
                style={{ display: this.state.expandReplies ? 'none' : null }}>
                <span>Expand All</span>
                <ExpandAll />
              </div>
              <div
                className="gallery-comments-info-expandall"
                onClick={() => this.handleExpandAllEvent()}
                style={{ display: !this.state.expandReplies ? 'none' : null }}>
                <span>Collapse All</span>
                <CollapseAll />
              </div>
              <div className="gallery-comments-info-sort">
                <div className="gallery-comments-info-dropdown-headline">
                  <span>Best</span>
                  <img
                    className="iconChevronDown"
                    src="https://s.imgur.com/desktop-assets/desktop-assets/chevron-down-w.c9d88e9dd4a2c859ee05.svg"
                    width="15"
                    alt="chevron-bar"></img>
                </div>
                <div className="gallery-comments-info-dropdown-bottom" style={{ display: 'none' }}>
                  <DropDownTriangle />
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
              <GalleryComments id={this.props.data.id} expandAll={this.state.expandReplies} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainGalleryContainer;
