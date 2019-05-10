import React from 'react';

import Heading from '../../shared/Heading';

import './style.css';

const FormHeader = ({ pageStatus }) => {
  return (
    <header className='form-header g-form'>
      <div className='form-header-text'>
        <Heading
          headline='A-List 🌎 Tours'
          subHeadline={`Please fill out form below (${pageStatus}/3)`}
        />
      </div>
    </header>
  );
};

export default FormHeader;
