import { Button, Input, Space } from "antd";
import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

const TodoForm = ({ todos, addTodo, deleteTodo }) => {
  const [todo, setTodo] = useState("");

  const onAddTodo = (e) => {
    if (todo.length != 0) {
      console.log("Add", e.target.value);
      addTodo(todo);
      setTodo("");
    }
  };
  return (
    <Space direction="vertical" size="middle">
      <Space.Compact style={{ width: "100%" }}>
        <Input
          value={todo}
          onInput={(e) => setTodo(e.target.value)}
          maxLength={60}
          placeholder="Add a task"
        />
        <Button type="primary" onClick={onAddTodo}>
          Add
        </Button>
      </Space.Compact>
      <Space.Compact>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </Space.Compact>
    </Space>
  );
};

export default TodoForm;
