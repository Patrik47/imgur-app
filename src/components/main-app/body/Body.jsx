import React from 'react';
import './Body.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import formatNumber from '../../gallery/functions/formatNumber';
import UpvoteSmall from '../../icons/UpvoteSmall';
import CommentsSmall from '../../icons/CommentsSmall';
import Views from '../../icons/Views';

function Body(props) {
  return (
    <div className="body">
      <div className="body-column">
        <InfiniteScroll
          className="scroll"
          dataLength={props.posts.length}
          next={props.fetchData}
          hasMore={props.more}
          loader={<h4>Loading...</h4>}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              750: 2,
              1050: 3,
              1350: 4,
              1650: 5,
              1950: 6,
              2250: 7
            }}>
            <Masonry columnsCount={5} gutter="10px">
              {props.posts.map((post) => (
                <div
                  key={post.id}
                  className="body-post"
                  style={{
                    height: props.masonryLayout ? 'fit-content' : 250 + 'px'
                  }}>
                  <div className="post-item-container">
                    <div className="post-item-image">
                      <img
                        src={post.url}
                        alt="post"
                        width={300}
                        height={100 + '%'}
                        onClick={() => {
                          localStorage.setItem('post', JSON.stringify(post));
                          window.location.href = '/gallery/' + post.id;
                        }}></img>
                    </div>
                    <div className="post-item-title-wrapper">
                      <div className="post-item-title">
                        <span>{post.title}</span>
                      </div>
                      <div className="post-item-info">
                        <div className="post-item-info-upvotes">
                          <div className="upvotes-img">
                            <UpvoteSmall />
                          </div>
                          <div className="upvotes-number">{formatNumber(post.upvotes)}</div>
                        </div>
                        <div className="post-item-info-comments">
                          <CommentsSmall />
                          <div className="comments-number">
                            {formatNumber(post.number_of_comments)}
                          </div>
                        </div>
                        <div className="post-item-info-views">
                          <Views />
                          <div className="views-number">{formatNumber(post.views)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Body;
