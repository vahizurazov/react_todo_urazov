import React, { Component } from 'react';
import './App.css';
import RenderWorkList from './RenderWorkList';
import Counter from './Counter';
import ClearAll from './ClearAll';

class App extends Component {
  state = {
    workList: [],
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
        // if (k === id.i) {
        //   el.checked ? (el.checked = false) : (el.checked = true);
        // }
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
  render() {
    return (
      <div>
        <h1 className="h1">Todoshechka</h1>
        <input
          type="text"
          onKeyDown={this.handleSubmit}
          className="input-group-text"
        />
        <RenderWorkList
          items={this.state.workList}
          checked={this.checkItem}
          deleted={this.deleteItem}
        />
        <div>
          <Counter items={this.state.workList} />
          <ClearAll clearCompleted={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
