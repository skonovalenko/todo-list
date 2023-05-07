import React, { useState } from "react";
import cl from "./TodoItem.module.css";
import { List, Checkbox, Modal, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodoItem = ({ todo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  let rootClasses = [];

  const getCheckedTodos = () => {
    rootClasses = [cl.todo];
    isCompleted
      ? rootClasses.push(cl.completed)
      : rootClasses.push(cl.uncompleted);
  };

  const onChange = (e) => {
    setIsCompleted(!isCompleted);
    getCheckedTodos();
  };
  const onDeleteTodo = () => {
    deleteTodo(todo.id);
  };
  getCheckedTodos();
  const confirmDeleteCategory = () => {
    Modal.confirm({
      title: "Do you want to delete that task?",
      okText: "Yes",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => onDeleteTodo(),
    });
  };
  return (
    <List.Item
      style={{ padding: "0.7em 1em", width: "100%" }}
      className={rootClasses.join(" ")}
    >
      <Checkbox
        className={cl.checkbox}
        checked={isCompleted}
        onChange={onChange}
      >
        <span>{todo.title}</span>
      </Checkbox>
      <DeleteOutlined
        onClick={() => confirmDeleteCategory()}
        style={{ color: "red", marginLeft: 12 }}
      />
    </List.Item>
  );
};

export default TodoItem;
