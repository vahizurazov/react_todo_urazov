import React, { Component } from 'react';
import PropTypes from 'prop-types';

function RenderWorkList(props) {
  let workList = props.items;
  let onlyCompleted = props.checkOnlyComp;
  let view = props.view;
  let nowShow;
  view === 'all' ? (nowShow = workList) : (nowShow = onlyCompleted);
  return (
    <ul className="list-group col-12">
      {nowShow.map((item, i) => {
        return (
          <li
            key={item.id}
            className="list-group-item col-12 d-flex justify-content-between"
          >
            <input
              type="checkbox"
              className="inputCheck col-1"
              id={item.id}
              onClick={() => props.checked(item.id)}
              checked={item.checked}
            />
            <label className="col-9" htmlFor={i}>
              {item.textValue}
            </label>
            <button
              onClick={() => props.deleted({ i })}
              className="btn btn-info col-2"
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
