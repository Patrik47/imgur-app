import React from 'react';
import './RepliesHandler.css';

function RepliesHandler(props) {
  return (
    <>
      <button
        type="button"
        className="button-replies"
        style={{
          display: props.isInArray(props.comment) || props.repliesNumber === 0 ? 'none' : null
        }}
        onClick={() => props.addOrRemove(props.comment)}>
        | + {props.repliesNumber} replies
      </button>
      <button
        type="button"
        className="button-replies"
        style={{
          display: !props.isInArray(props.comment) ? 'none' : null
        }}
        onClick={() => props.addOrRemove(props.comment)}>
        | - Collapse replies
      </button>
    </>
  );
}
export default RepliesHandler;
