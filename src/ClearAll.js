import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ClearAll(props) {
  let { clearCompleted } = props;
  return (
    <div>
      <button onClick={clearCompleted} className="btn btn-success">
        Clear Completed
      </button>
    </div>
  );
}

ClearAll.propTypes = {
  clearCompleted: PropTypes.func,
};
export default ClearAll;
