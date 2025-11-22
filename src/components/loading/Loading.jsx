import React from 'react';
import "./loading.css";

const Loading = () => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
