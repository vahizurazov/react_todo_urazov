import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SelectAll(props) {
  let { selectAll } = props; ////?????
  // console.log(props);
  return (
    <div>
      <input
        type="checkbox"
        id="select"
        onClick={() => props.selectAll()}
        checked={props.isAllChecked()}
      />
      <label htmlFor="select">Select All</label>
    </div>
  );
}

SelectAll.propTypes = {
  selectAll: PropTypes.func,
};
export default SelectAll;
