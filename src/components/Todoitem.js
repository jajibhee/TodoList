import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };

    //long method
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through"
    //   };
    // } else {
    //   return {
    //     textDecoration: "none"
    //   };
    // }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}
//PropTypes
Todoitem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ec22ac",
  padding: "5px",
  borderRadius: "10px",
  outline: "none",
  color: "black",
  border: "none",
  cursor: "pointer",
  float: "right"
};
export default Todoitem;