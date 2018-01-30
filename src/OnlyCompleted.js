import React, { Component } from 'react';
import PropTypes from 'prop-types';

function OnlyCompleted(props) {
  let { onlyCompleted } = props;
  return (
    <div>
      <button onClick={onlyCompleted} className="btn btn-success">
        Only Completed
      </button>
    </div>
  );
}

OnlyCompleted.propTypes = {
  onlyCompleted: PropTypes.func,
};
export default OnlyCompleted;
