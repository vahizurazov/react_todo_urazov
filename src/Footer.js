import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import ClearAll from './ClearAll';
import OnlyCompleted from './OnlyCompleted';
import AllTasks from './AllTasks';
import SelectAll from './SelectAll';

function Footer(props) {
  if (!props.items.length) {
    return null;
  }
  return (
    <footer>
      <Counter items={props.items} />
      <ClearAll clearCompleted={props.clearCompleted} />
      <OnlyCompleted onlyCompleted={props.onlyCompleted} />
      <AllTasks allTasks={props.allTasks} />
      <SelectAll
        selectAll={props.selectAll}
        isAllChecked={props.isAllChecked}
      />
    </footer>
  );
}

Footer.propTypes = {
  //   allTasks: PropTypes.func,
};
export default Footer;
