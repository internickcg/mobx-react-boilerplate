import React, { Component } from "react";
import { observer } from "mobx-react";

const Todo = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => (todo.finished = !todo.finished)}
      //onClick={() => todo.props.projState.popTodo()}
    />
    {todo.title}
  </li>
));

export default Todo;
