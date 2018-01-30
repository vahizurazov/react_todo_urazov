import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  return <div className="textLeft"> {uncheckItem(props)} items left</div>;
}
Counter.propTypes = {
  uncheckItem: PropTypes.func,
};
export default Counter;
