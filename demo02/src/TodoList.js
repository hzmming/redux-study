import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getTodoList,
} from "./store/actionCreators";
import { connect } from "react-redux";

class TodoList extends Component {
  componentDidMount() {
    const action = getTodoList();
    this.props.dispatch(action);
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input
          placeholder={this.props.inputValue}
          value={this.props.inputValue}
          onChange={this.props.changeInputValue}
          style={{ width: "250px" }}
        />
        <Button type="primary" onClick={this.props.clickBtn}>
          增加
        </Button>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.props.deleteItem(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    // 个人觉得直接把dispatch挂上去，将函数(比如下面那几个)写在组件内部，还可以避免this指向的问题
    dispatch,

    changeInputValue(e) {
      const action = changeInputAction(e.target.value);
      dispatch(action);
    },

    clickBtn() {
      const action = addItemAction();
      dispatch(action);
    },

    deleteItem(index) {
      const action = deleteItemAction(index);
      dispatch(action);
    },
  };
};

// 大概理解，connect就是个高阶组件，将TodoList包装一层，并绑定相应的props
// stateToProps、dispatchToProps，如字面意思，将state和dispatch绑定到props上
export default connect(stateToProps, dispatchToProps)(TodoList);
