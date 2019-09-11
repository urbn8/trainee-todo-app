import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import { TodoType } from "./types";

interface IProps {}

interface IState {
  todos: Array<TodoType>;
  newTodo: TodoType;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      newTodo: {},
      todos: [
        {
          id: 0,
          name: "One",
          description: "Description for One"
        },
        {
          id: 1,
          name: "Two",
          description: "Description for Two"
        },
        {
          id: 2,
          name: "Three",
          description: "Description for Three"
        }
      ]
    };
  }
  handleAdd = (): void => {
    this.setState(preState => {
      return {
        newTodo: {},
        todos: [...preState.todos, this.state.newTodo]
      };
    });
  };
  handleRemove = (id: number): void => {
    let newState: Array<TodoType> = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (i === id) {
        continue;
      }
      newState = [...newState, this.state.todos[i]];
    }

    this.setState(
      (): IState => {
        return {
          newTodo: { ...this.state.newTodo },
          todos: [...newState]
        };
      }
    );
  };
  handleChange = (e: any) => {
    let newTodo: TodoType = {
      id: this.state.newTodo.id,
      name: this.state.newTodo.name,
      description: this.state.newTodo.description
    };

    if (e.target.name === "name") {
      newTodo.name = e.target.value;
    } else {
      newTodo.description = e.target.value;
    }
    this.setState(
      (): IState => {
        return {
          newTodo: { ...newTodo },
          todos: [...this.state.todos]
        };
      }
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="box">
          <div className="inputBox">
            <input
              id="name"
              name="name"
              onChange={e => this.handleChange(e)}
              type="text"
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="inputBox">
            <input
              id="description"
              name="description"
              onChange={e => this.handleChange(e)}
              type="text"
              required
            />
            <label htmlFor="description">Description</label>
          </div>
          <button onClick={() => this.handleAdd()}>+</button>
        </div>
        <div className="container">
          <TodoList
            onRemove={id => this.handleRemove(id)}
            todos={this.state.todos}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
