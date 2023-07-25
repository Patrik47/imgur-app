import React from "react";
import "./GalleryComments.css";
import Avatar from "../../user-avatar.png";
import formatTimeElapsed from "./formatTimeElapsed";
import separateNumberDigitsWithComas from "./localeNumber";
import GalleryReplies from "./GalleryReplies";

class GalleryComments extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      expandedReplies: [],
      comments: []
    };
  }

  componentDidMount() {
    this.initData();
  }

  initData = () => {
    this.setState({ comments: this.props.data.comments.slice(0, 5) });
  }

  expandComments = () => {
    this.setState({ expanded: true, comments: this.props.data.comments });
  }

  addOrRemoveFromExpandedArray = (id) => {
    if (this.isInExpandedArray(id)) {
      this.setState({
        expandedReplies: this.state.expandedReplies.filter(e => e !== id)
      });
    } else {
      this.setState({
        expandedReplies: this.state.expandedReplies.concat(id)
      })
    }
  }

  isInExpandedArray = (id) => {
    if (this.state.expandedReplies.includes(id))  {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="gallery-comments-list">
        <div className="comments-list-inner">
          {this.state.comments.map((comment, id) => {
            return (
            <div key={id} className="gallery-comment">
              <div className="gallery-comment-wrapper">
                <div className="gallery-comment-container">
                  <div className="gallery-comment-header">
                    <div className="gallery-comment-avatar">
                      <img
                        src={Avatar}
                        width={24}
                        alt="comment-author-avatar"
                      ></img>
                    </div>
                    <span className="gallery-comment-author-name">{comment.author}</span>
                    <span style={{ marginLeft: 8 + 'px', marginRight: 8 + 'px' }}>•</span>
                    <span>{formatTimeElapsed(comment.date_published)} ago via {comment.device}</span>
                    <div className="comment-menu-space"></div>
                  </div>
                  <div className="gallery-comment-body">
                    <span>{comment.comment}</span>
                  </div>
                  <div className="gallery-comment-actions">
                    <div className="gallery-comment-upvote">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Upvote</title>
                        <path
                          fill="none"
                          stroke="#B4B9C2"
                          strokeWidth="2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"
                        ></path>
                      </svg>
                    </div>
                    <span>{separateNumberDigitsWithComas(comment.upvotes)}</span>
                    <div className="gallery-comment-downvote">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="Vote Vote-down"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Downvote</title>
                        <path
                          fill="none"
                          stroke="#B4B9C2"
                          strokeWidth="2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.803 13.476a1.2 1.2 0 01-1.606 0 53.03 53.03 0 01-2.364-2.243 29.613 29.613 0 01-2.422-2.722c-.339-.435-.025-1.028.526-1.028h2.397V3.336c0-.524.306-.982.823-1.064A11.874 11.874 0 018 2.15c.829 0 1.427.056 1.843.122.517.082.824.54.824 1.064v4.147h2.396c.552 0 .865.593.527 1.028-.52.669-1.32 1.62-2.423 2.722a53.038 53.038 0 01-2.364 2.243z"
                        ></path>
                      </svg>
                    </div>
                    <button type="button" className="button-replies" style={{display: this.isInExpandedArray(id) ? "none" : null}} onClick={() => this.addOrRemoveFromExpandedArray(id)}>
                      | + {comment.replies.length} replies
                    </button>
                    <button type="button" className="button-replies" style={{display: !this.isInExpandedArray(id) ? "none" : null}} onClick={() => this.addOrRemoveFromExpandedArray(id)}>
                      | - Collapse replies
                    </button>
                  </div>
                </div>
              </div>
              <GalleryReplies replies={comment.replies} expanded={this.isInExpandedArray(id)}/>
            </div>);
          })}
        </div>
        <div className="load-more" style={{ display: this.state.expanded ? "none" : null }}>
          <div className="load-more-container">
            <button className="load-more-button" onClick={() => this.expandComments()}>
              Load more commments
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" alt="▼"><title>Chevron Pointing Down</title><path d="M4 6l4 4 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryComments;
