import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Spinner.scss';

function Spinner() {
  return (
    <div className="spinner">
      <ClipLoader
        color={'#b4b9c2'}
        loading={true}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
export default Spinner;
