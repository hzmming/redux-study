import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./TodoList";

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

// 注意，此外我写的是 App 而不是 <App />。因为这里的 App 只是个 JSX 片段，并不是个函数！const App = () => (...) 这样才要用 <App />
ReactDOM.render(App, document.getElementById("root"));
