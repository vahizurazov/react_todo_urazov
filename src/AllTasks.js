import React, { Component } from 'react';
import PropTypes from 'prop-types';

function AllTasks(props) {
  let { allTasks } = props;
  return (
    <div>
      <button onClick={allTasks} className="btn btn-warning">
        All
      </button>
    </div>
  );
}

AllTasks.propTypes = {
  allTasks: PropTypes.func,
};
export default AllTasks;
