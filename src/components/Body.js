import React from "react";
import "./Body.css";
import InfiniteScroll from "react-infinite-scroll-component";
import postsData from "../posts.json";

class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            allPosts: postsData,
            startingPos: 0,
            posts: [],
            isThereMore: true
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        let newPosts = postsData.slice(this.state.startingPos, this.state.startingPos + 16);
        if (this.state.posts.length + newPosts.length === this.state.allPosts.length) {
            this.setState({ isThereMore: false });
        }
        this.setState({
            posts: this.state.posts.concat(newPosts),
            startingPos: this.state.startingPos + 16
        });
    }

    formatNumber = number => {
        if (number < 1e3) return number;
        if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + "K";
        if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + "M";
        if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + "B";
        if (number >= 1e12) return +(number / 1e12).toFixed(1) + "T";
    }


    render() {
        return (
            <div className="body">
                <div className="body-column">
                    <InfiniteScroll className="scroll"
                        dataLength={this.state.posts.length}
                        next={this.fetchData}
                        hasMore={this.state.isThereMore}
                        loader={<h4>Loading...</h4>}>
                        {this.state.posts.map((post) => (
                            <div key={post.id} className="body-post">
                                <div className="post-item-container">
                                    <div className="post-item-image">
                                        <img src={post.image} alt="post" width={300} height={219} onClick={() => window.location.href = "/gallery/" + post.id}>
                                        </img>
                                    </div>
                                    <div className="post-item-title-wrapper">
                                        <div className="post-item-title">
                                            <span>{post.title}</span>
                                        </div>
                                        <div className="post-item-info">
                                            <div className="post-item-info-upvotes">
                                                <div className="upvotes-img">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Upvote</title>
                                                        <path fill="currentColor" stroke="#ffffff" strokeWidth="0" fillRule="evenodd" clipRule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="upvotes-number">{this.formatNumber(post.upvotes)}</div>
                                            </div>
                                            <div className="post-item-info-comments">
                                                <svg width="16" height="16" viewBox="0 0 16 16" className="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Comments</title>
                                                    <path fill="currentColor" stroke="#ffffff" strokeWidth="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z">
                                                    </path>
                                                </svg>
                                                <div className="comments-number">{this.formatNumber(post.number_of_comments)}</div>
                                            </div>
                                            <div className="post-item-info-views">
                                                <svg width="16" height="16" viewBox="0 0 16 16" className="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Post views</title>
                                                    <path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor">
                                                    </path>
                                                </svg>
                                                <div className="views-number">{this.formatNumber(post.views)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

export default Body;