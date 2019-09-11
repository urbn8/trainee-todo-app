import React from "react";
import { TodoType } from "./types";

interface IProps {
  todo: TodoType;
  onRemove(): void;
}

export default class Todo extends React.Component<IProps> {
  render() {
    return (
      <React.Fragment>
        <div className="infoBox">
          <span>{this.props.todo.name}:</span>
          <span>{this.props.todo.description}</span>
          <button onClick={this.props.onRemove}>x</button>
        </div>
      </React.Fragment>
    );
  }
}
