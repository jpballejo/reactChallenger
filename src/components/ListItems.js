import React from "react";
import { Link } from "react-router-dom";
import Items from "./Items";
import './Todolist.css';

const ListItems = () => {
  return (
    <div className="todolist">
      <Link to="/todo"> Add new Todolist </Link>
      <Items />
    </div>
  );
}

export default ListItems;