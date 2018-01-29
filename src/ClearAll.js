import React, { Component } from 'react';

function ClearAll(props) {
  const { clearCompleted } = props;
  return (
    <div>
      <button onClick={clearCompleted} className="btn btn-success">
        Clear Completed
      </button>
    </div>
  );
}

export default ClearAll;
