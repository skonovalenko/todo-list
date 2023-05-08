import React, { useState } from "react";
import cl from "./TodoItem.module.css";
import { List, Checkbox, Modal, Typography, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const { Text, Link } = Typography;
const TodoItem = ({ todo, deleteTodo, editTodo}) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  let rootClasses = [];

  const getCheckedTodos = () => {
    rootClasses = [cl.todo];
    isCompleted
      ? rootClasses.push(cl.completed)
      : rootClasses.push(cl.uncompleted);
  };

  const onChange = (e) => {
    console.log(e.target);
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
const onEditTodo = (value) => {
  editTodo({...todo, title: value})
}
  return (
    <List.Item
      style={{ padding: "0.7em 1em", width: "100%", minHeight: '4em' }}
      className={rootClasses.join(" ")}
    >
      <Checkbox
        className={cl.checkbox}
        checked={isCompleted}
        onChange={onChange}
      >
      </Checkbox>
      <Text editable={{tooltip: false, autoSize: false, onChange: onEditTodo}} className={cl.todo__text}>{todo.title}</Text>
      <DeleteOutlined
        onClick={() => confirmDeleteCategory()}
        style={{ color: "red", marginLeft: 12 }}
      />
    </List.Item>
  );
};

export default TodoItem;
