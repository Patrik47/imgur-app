import React from 'react';
import './GalleryComments.css';
import Avatar from '../../../user-avatar.png';
import formatTimeElapsed from '../functions/formatTimeElapsed';
import separateNumberDigitsWithComas from '../functions/localeNumber';
import GalleryReplies from './GalleryReplies';
import CommentsData from '../../../comments.json';
import RepliesData from '../../../replies.json';
import UpvoteSmall from '../../icons/UpvoteSmall';
import DownvoteSmall from '../../icons/DownvoteSmall';
import ChevronDown from '../../icons/ChevronDown';

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

  // componentDidUpdate(prevProps) {
  //   if (prevProps.expandAll) {
  //     this.updateCommentIds(true)
  //   } else {
  //     this.updateCommentIds(false)
  //   }
  // }

  // updateCommentIds = (state) => {
  //   if (state) {
  //     this.setState({
  //       expandedReplies: this.fetchAllCommentIds()
  //     });
  //   } else {
  //     this.setState({
  //       expandedReplies: []
  //     });
  //   }
  // }

  initData = () => {
    this.setState({
      comments: CommentsData.filter((comment) => comment.post_id === this.props.id).slice(0, 5)
    });
  };

  expandComments = () => {
    this.setState({
      expanded: true,
      comments: CommentsData.filter((comment) => comment.post_id === this.props.id)
    });
  };

  fetchNumberOfReplies = (id) => {
    return RepliesData.filter((reply) => reply.comment_id === id).length;
  };

  fetchReplies = (id) => {
    return RepliesData.filter((reply) => reply.comment_id === id);
  };

  addOrRemoveFromExpandedArray = (id) => {
    if (this.isInExpandedArray(id)) {
      this.setState({
        expandedReplies: this.state.expandedReplies.filter((e) => e !== id)
      });
    } else {
      this.setState({
        expandedReplies: this.state.expandedReplies.concat(id)
      });
    }
  };

  isInExpandedArray = (id) => {
    if (this.state.expandedReplies.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  // fetchAllCommentIds = () => {
  //   let allCommentIds = [];
  //   for (let i = 0; i < this.state.comments.length; i++) {
  //     allCommentIds.push(this.state.comments.id);
  //   }
  //   return allCommentIds;
  // }

  render() {
    return (
      <div className="gallery-comments-list">
        <div className="comments-list-inner">
          {this.state.comments.map((comment) => {
            return (
              <div key={comment.comment_id} className="gallery-comment">
                <div className="gallery-comment-wrapper">
                  <div className="gallery-comment-container">
                    <div className="gallery-comment-header">
                      <div className="gallery-comment-avatar">
                        <img src={Avatar} width={24} alt="comment-author-avatar"></img>
                      </div>
                      <span className="gallery-comment-author-name">{comment.author}</span>
                      <span style={{ marginLeft: 8 + 'px', marginRight: 8 + 'px' }}>•</span>
                      <span>
                        {formatTimeElapsed(comment.date_published)} ago via {comment.device}
                      </span>
                      <div className="comment-menu-space"></div>
                    </div>
                    <div className="gallery-comment-body">
                      <span>{comment.comment}</span>
                    </div>
                    <div className="gallery-comment-actions">
                      <div className="gallery-comment-upvote">
                        <UpvoteSmall />
                      </div>
                      <span>{separateNumberDigitsWithComas(comment.upvotes)}</span>
                      <div className="gallery-comment-downvote">
                        <DownvoteSmall />
                      </div>
                      <button
                        type="button"
                        className="button-replies"
                        style={{
                          display:
                            this.isInExpandedArray(comment.comment_id) ||
                            this.fetchNumberOfReplies(comment.comment_id) === 0
                              ? 'none'
                              : null
                        }}
                        onClick={() => this.addOrRemoveFromExpandedArray(comment.comment_id)}>
                        | + {this.fetchNumberOfReplies(comment.comment_id)} replies
                      </button>
                      <button
                        type="button"
                        className="button-replies"
                        style={{
                          display: !this.isInExpandedArray(comment.comment_id) ? 'none' : null
                        }}
                        onClick={() => this.addOrRemoveFromExpandedArray(comment.comment_id)}>
                        | - Collapse replies
                      </button>
                    </div>
                  </div>
                </div>
                <GalleryReplies
                  replies={this.fetchReplies(comment.comment_id)}
                  expanded={this.isInExpandedArray(comment.comment_id)}
                />
              </div>
            );
          })}
        </div>
        <div className="load-more" style={{ display: this.state.expanded ? 'none' : null }}>
          <div className="load-more-container">
            <button className="load-more-button" onClick={() => this.expandComments()}>
              Load more commments
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryComments;
