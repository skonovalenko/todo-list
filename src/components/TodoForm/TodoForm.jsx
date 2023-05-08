import { Button, Input, Space } from "antd";
import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

const TodoForm = ({ todos, addTodo, deleteTodo, editTodo }) => {
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
      <Space.Compact style={{ width: "37.5vw"}} >
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
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </Space.Compact>
    </Space>
  );
};

export default TodoForm;
