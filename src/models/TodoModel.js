import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export default class TodoModel extends React.Component {
  id = Math.random();
  @observable title;
  @observable finished = false;

  constructor(title) {
    super();
    this.title = title;
  }
  render() {
    return (
      <li>
      <input
        type="checkbox"
        checked={this.finished}
        onClick={() => (this.finished = !this.finished)}
      />
      {this.title}
    </li>
    );
  }
}
