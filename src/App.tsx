import React, { FC, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import TodoList from "./Components/TodoList";
import EditTodo from "./Components/EditTodo";
import CreateTodo from "./Components/CreateTodo";
import TopNavigationBar from "./Components/TopNaviagtionBar";

export const App: FC = () => (
  <Router>
    <Container>
      <TopNavigationBar />
      <h2>TODO list</h2>
      <Route path="/" exact component={TodoList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Container>
  </Router>
);
