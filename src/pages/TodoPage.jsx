import { useState, useEffect } from "react";
import "../App.css";
import TodoForm from "../components/TodoForm/TodoForm";
import { Layout } from "antd";
import TodosService from "../API/TodoService";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodosService.fetchAllTodos(6, 1).then((data) => {
      setTodos(data.data);
    });
  }, []);
  const addTodo = (title) => {
    const newTodo = {
      userId: 1,
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
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
  const editTodo = (todo) => {
    const newTodos = todos.map((cur) => {
      if(cur.id === todo.id) {
        cur.title = todo.title;
      }
      return cur;
    })
    setTodos([...newTodos])
  console.log("Edited",todos)
  };

  return (
    <div className="сontent">
      <TodoForm todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
}

export default TodoPage;
