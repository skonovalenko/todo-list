import { useState, useEffect } from "react";
import "../App.css";
import TodoForm from "../components/TodoForm/TodoForm";
import { Layout } from "antd";
import TodosService from "../API/TodoService";

const { Header, Content } = Layout;

function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodosService.fetchAllTodos(6, 1).then((data) => {
      setTodos(data.data);
      console.log("Todos: ", todos);
    });
  }, []);

  const addTodo = (title) => {
    const newTodo = {
      userId: 1,
      id: todos[todos.length - 1].id + 1,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log("After adding: ", todos);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("After deleting: ", todos);
  };
  return (
    <div className="сontent">
      <TodoForm todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoPage;
