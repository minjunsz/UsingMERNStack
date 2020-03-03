import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const TopNavigationBar: FC = () => (
  <Menu inverted stackable>
    <Menu.Item header as={Link} to="/">
      MERN Stack TODO
    </Menu.Item>
    <Menu.Item as={Link} to="/">
      Todos
    </Menu.Item>
    <Menu.Item as={Link} to="/create">
      Create Todo
    </Menu.Item>
  </Menu>
);

export default memo(TopNavigationBar);
