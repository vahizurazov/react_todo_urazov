import React, { Component } from 'react';

function RenderWorkList(props) {
  let workList = props.items;
  return (
    <ul className="list-group">
      {workList.map((item, i) => {
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

export default RenderWorkList;
