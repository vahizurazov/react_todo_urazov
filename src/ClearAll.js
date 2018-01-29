import React, { Component } from 'react';

function ClearAll(props) {
  const { clearCompleted } = props;
  return (
    <div>
      <button onClick={clearCompleted}>Clean all</button>
    </div>
  );
}

export default ClearAll;
