import React from "react";

export default class Todo extends React.Component {
  render() {
    const { id, name, completed } = this.props.todo;
    const { toggleDone } = this.props;
    return (
      <div onClick={() => toggleDone(id)}>
        {name} {completed && "✅"}
      </div>
    );
  }
}
