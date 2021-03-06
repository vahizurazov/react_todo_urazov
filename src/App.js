import React, { Component } from 'react';
import './App.css';
import RenderWorkList from './RenderWorkList';
import Footer from './Footer';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    workList: [],
    onlyCompleted: [],
    view: 'all',
    isAllChecked: () => {
      if (
        this.state.workList.filter(el => el.checked).length ===
        this.state.workList.length
      ) {
        return true;
      } else return false;
    },
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
      onlyCompleted: [],
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

  selectAll = () => {
    if (this.state.isAllChecked()) {
      this.setState(prevState => ({
        workList: prevState.workList.map(el => {
          el.checked = false;
          return el;
        }),
      }));
    } else {
      this.setState(prevState => ({
        workList: prevState.workList.map(el => {
          el.checked = true;
          return el;
        }),
      }));
    }
  };

  render() {
    return (
      <div className="col-12">
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
        <Footer
          items={this.state.workList}
          clearCompleted={this.clearCompleted}
          onlyCompleted={this.onlyCompleted}
          allTasks={this.allTasks}
          selectAll={this.selectAll}
          isAllChecked={this.state.isAllChecked}
        />
      </div>
    );
  }
}

export default App;
