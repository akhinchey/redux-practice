import React, { Component } from 'react';

export default class Todo extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     todo: this.props.todo,
  //   };
  // }
  render() {
    return(
      <li>
        {this.props.todo}
      </li>
    );
  }
}
