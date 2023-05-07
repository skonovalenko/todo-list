import React from "react";
import { List } from "antd";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <List
      style={{ minWeight: "60vw" }}
      pagination={{ pageSize: "5" }}
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(item, index) => (
        <TodoItem todo={item} deleteTodo={deleteTodo} />
      )}
    />
  );
};

export default TodoList;
