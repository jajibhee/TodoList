import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// eslint-disable-next-line
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
// eslint-disable-next-line
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "Take me out",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "Dinner with the fam",
      //   completed: true
      // },
      // {
      //   id: 3,
      //   title: "Meet up with ABat",
      //   completed: false
      // }
    ]
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
  //toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //delete todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };
  //add todo
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container ">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
