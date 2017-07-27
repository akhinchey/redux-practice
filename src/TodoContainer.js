import React, { Component } from 'react'
import Todo from './Todo'
export default class TodoContainer extends Component {

  constructor() {
    super();
    this.state = {
      todos: ["Do the dishes", "clean the bathroom"],
    };
  }

  render() {
    let todos = this.state.todos;
    return (
      <div>
        <div>My List</div>
        <ul>
          {todos.map(function(todo, i) {
            return <Todo todo={todo} key={i} />
          })}
        </ul>
      </div>
    );
  }
}
