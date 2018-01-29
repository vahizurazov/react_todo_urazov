import React, { Component } from 'react';

function Counter(props) {
  let uncheckItem = props => {
    let x = 0;
    props.items.forEach(element => {
      if (!element.checked) {
        x++;
      }
    });
    return x;
  };

  return <div> {uncheckItem(props)} items left</div>;
}

export default Counter;
