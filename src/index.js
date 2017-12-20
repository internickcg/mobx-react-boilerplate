import { autorun } from "mobx";
import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

const store = new TodoListModel();

render(
  <div>
    <DevTools />  {/* blah */}
    <TodoList store={store} />
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Get more coffee");

let i = 0
let disposer = autorun( () => console.log("Task Completed: " + store.todos[i].title + " : " + store.todos[i].finished) )

//store.popTodo(0);

//store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 500);

// playing around in the console
window.store = store;
