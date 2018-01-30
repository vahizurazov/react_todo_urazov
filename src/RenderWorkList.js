import React, { Component } from 'react';
import PropTypes from 'prop-types';

function RenderWorkList(props) {
  let workList = props.items;
  let onlyCompleted = props.checkOnlyComp;
  let view = props.view;
  let nowShow;
  view === 'all' ? (nowShow = workList) : (nowShow = onlyCompleted);
  return (
    <ul className="list-group">
      {nowShow.map((item, i) => {
        return (
          <li key={item.id} className="list-group-item">
            <input
              type="checkbox"
              id={item.id}
              onClick={() => props.checked(item.id)}
            />
            <label htmlFor={i}>{item.textValue}</label>
            <button
              onClick={() => props.deleted({ i })}
              className="btn btn-info"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

RenderWorkList.propTypes = {
  workListArray: PropTypes.array,
};
export default RenderWorkList;
