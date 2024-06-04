import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    showTodos: true,
  };

  toggleShowTodos = (event) => {
    this.setState({
      ...this.state,
      showTodos: !this.state.showTodos,
    });
  };
  
  render() {
    const { todos, toggleDone } = this.props;
    const filteredTodos = todos.filter(
      (todo) => !todo.completed || this.state.showTodos
    );
    return (
      <div>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleDone={toggleDone} />
        ))}
        <button onClick={this.showTodos}>
          {this.state.showTodos ? "Hide Completed" : "Show All"}
        </button>
      </div>
    );
  }
}
