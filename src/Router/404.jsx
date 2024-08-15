import React from 'react';

function E404() {

  return (
    <iframe
      src={`./404.html?s=${0}`}
      title="Archivo HTML"
      width="100%"
      height="600px"
      style={{ border: 'none' }}
    />
  );
}

export default E404;
