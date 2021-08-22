import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  value: index,
});

export const getListAction = (data) => ({
  type: GET_LIST,
  value: data,
});

export const getTodoList = () => async (dispatch) => {
  // dispatch为thunk注入的
  // mock data
  const url =
    "https://www.fastmock.site/mock/85957a3ab2f63628d6ab2e49824682d9/redux-study/get-data";
  const res = await axios.get(url).then((res) => res.data);
  const action = getListAction(res);
  dispatch(action);
};
