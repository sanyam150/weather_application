import React from 'react';

const Header = () => {
  return (
    <h3 style={{ textAlign: 'center' }}>
      <span
        className='badge'
        style={{
          color: 'white',
          backgroundColor: 'rgb(13, 202, 240)',
        }}
      >
        Weather Report
      </span>
    </h3>
  );
};

export default Header;
