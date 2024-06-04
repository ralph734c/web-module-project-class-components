import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

let id = 0;
let getId = () => ++id;

const initialTodos = [
  { id: getId(), name: "Pick up dog poop.", completed: false },
  { id: getId(), name: "Mow the lawn", completed: true },
  { id: getId(), name: "Catch up on React course", completed: false },
];

export default class App extends React.Component {
  state = {
    todos: initialTodos,
  };

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name})
    })
  }

  toggleDone = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) return { ...todo, completed: !todo.completed };
        return todo;
      }),
    });
  };
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleDone={this.toggleDone} />
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
