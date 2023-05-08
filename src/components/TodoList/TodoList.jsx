import React from "react";
import { List } from "antd";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <List
        style={{ width: "37.5vw"}}
      pagination={{ pageSize: "5" }}
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(item, index) => (
        <TodoItem todo={item} deleteTodo={deleteTodo} editTodo={editTodo}/>
      )}
    />
  );
};

export default TodoList;
