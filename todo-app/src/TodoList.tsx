import React, { Component } from "react";
import Todo from "./Todo";
import { TodoType } from "./types";

interface IProps {
  todos: Array<TodoType>;
  onRemove(id: number): void
}

export default class TodoList extends Component<IProps, {}> {
  render() {
    return (
      <React.Fragment>
        {this.props.todos.map((todo, index) => {
          return <Todo onRemove={ () => this.props.onRemove(index)} key={index} todo={todo} />;
        })}
      </React.Fragment>
    );
  }
}
