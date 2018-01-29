import React, { Component } from 'react';

function RenderWorkList(props) {
  let workList = props.items;
  return (
    <ul>
      {workList.map((item, i) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              onClick={() => props.checked(item.id)}
            />
            <label htmlFor={i}>{item.textValue}</label>
            <button onClick={() => props.deleted({ i })}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default RenderWorkList;
