//This component is very simple. It just takes a children prop and renders it inside a <div> with some styling.

import React from 'react';

function Wrapper({ children }) {
  const wrapperStyle = {
    border: '2px solid blue',
    padding: '10px',
    margin: '10px'
  };

  return (
    <div style={wrapperStyle}>
      {children}
    </div>
  );
}

export default Wrapper;