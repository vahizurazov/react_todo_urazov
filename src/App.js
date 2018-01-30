import React, { Component } from 'react';
import './App.css';
import RenderWorkList from './RenderWorkList';
import Counter from './Counter';
import ClearAll from './ClearAll';
import OnlyCompleted from './OnlyCompleted';
import AllTasks from './AllTasks';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    workList: [],
    onlyCompleted: [],
    view: 'all',
  };

  handleSubmit = e => {
    let inputValue = e.target.value;
    if (e.keyCode !== 13 || inputValue === '') return;
    this.setState(prevState => ({
      workList: prevState.workList.concat({
        textValue: inputValue,
        checked: false,
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36),
      }),
    }));
    e.target.value = '';
  };

  checkItem = id => {
    this.setState(prevState => ({
      workList: prevState.workList.map(el => {
        if (el.id === id) {
          el.checked = !el.checked;
        }
        return el;
      }),
    }));
  };

  deleteItem = id => {
    this.setState(prevState => ({
      workList: prevState.workList.filter((el, l) => l !== id.i),
    }));
  };

  clearCompleted = () => {
    this.setState(prevState => ({
      workList: prevState.workList.filter(el => !el.checked),
    }));
  };
  onlyCompleted = () => {
    this.setState(prevState => ({
      onlyCompleted: prevState.workList.filter(el => el.checked),
      view: 'completed',
    }));
  };

  allTasks = () => {
    this.setState(prevState => ({
      view: 'all',
    }));
  };

  render() {
    return (
      <div>
        <h1 className="h1">Todoshechka</h1>
        <input
          type="text"
          onKeyDown={this.handleSubmit}
          className="input-group-text form-control"
        />
        <RenderWorkList
          items={this.state.workList}
          checked={this.checkItem}
          deleted={this.deleteItem}
          checkOnlyComp={this.state.onlyCompleted}
          view={this.state.view}
        />
        <div>
          <Counter items={this.state.workList} />
          <ClearAll clearCompleted={this.clearCompleted} />
          <OnlyCompleted onlyCompleted={this.onlyCompleted} />
          <AllTasks allTasks={this.allTasks} />
        </div>
      </div>
    );
  }
}

export default App;
