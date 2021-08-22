import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";

// 默认数据
const defaultState = {
  inputValue: "Writing Something",
  list: [],
};

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    return { ...state, inputValue: action.value };
  }
  if (action.type === ADD_ITEM) {
    return {
      inputValue: "", // 清空输入框
      list: state.list.concat(action.value),
    };
  }
  if (action.type === DELETE_ITEM) {
    const newList = [...state.list];
    newList.splice(action.value, 1);
    return {
      ...state,
      list: newList,
    };
  }
  if (action.type === GET_LIST) {
    return { ...state, list: action.value };
  }
  return state;
};

export default reducer;
