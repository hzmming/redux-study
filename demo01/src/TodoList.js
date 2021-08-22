import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getTodoList,
} from "./store/actionCreators";

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();

    // 订阅变化
    store.subscribe(this.storeChange);
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  storeChange = () => {
    this.setState(store.getState);
  };

  changeInputValue = (e) => {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  };

  clickBtn = () => {
    const action = addItemAction(this.state.inputValue);
    store.dispatch(action);
  };

  deleteItem = (index) => {
    const action = deleteItemAction(index);
    store.dispatch(action);
  };

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input
          placeholder={this.state.inputValue}
          value={this.state.inputValue}
          onChange={this.changeInputValue}
          style={{ width: "250px" }}
        />
        <Button type="primary" onClick={this.clickBtn}>
          增加
        </Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.deleteItem(index)}>{item}</List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;
