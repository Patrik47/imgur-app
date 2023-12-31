import React from 'react';

function BackToTop(props) {
  return (
    <div className="badge-wrapper" style={{ visibility: props.isHidden ? 'visible' : 'hidden' }}>
      <a href="#">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="badge-icon"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <title>Back to the top</title>
          <path
            fill="#ffffff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0327 8C12.4804 8 12.0327 8.44772 12.0327 9C12.0327 9.55228 12.4804 10 13.0327 10H19.0327C19.5849 10 20.0327 9.55228 20.0327 9C20.0327 8.44772 19.5849 8 19.0327 8H13.0327ZM21.0449 16.2652L16.7177 12.2709C16.6429 12.2005 16.5596 12.1437 16.471 12.1006C16.1944 11.9658 15.87 11.9671 15.5956 12.1006C15.507 12.1437 15.4237 12.2005 15.3488 12.2709L11.0217 16.2652C10.6159 16.6398 10.5905 17.2725 10.9652 17.6783C11.3398 18.0841 11.9724 18.1094 12.3782 17.7348L15.0338 15.2835L15.0338 23C15.0338 23.5523 15.4815 24 16.0338 24C16.5861 24 17.0338 23.5523 17.0338 23L17.0338 15.2844L19.6884 17.7348C20.0942 18.1094 20.7268 18.0841 21.1014 17.6783C21.476 17.2725 21.4507 16.6398 21.0449 16.2652Z"></path>
        </svg>
      </a>
    </div>
  );
}
export default BackToTop;
