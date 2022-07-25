import "./style.css"
import ListItem from "../ListItem";
import CreateListItem from "../CreateListItem";
import {useState} from "react";
import EditListItem from "../EditListItem";

let initialtodos = [
    {
        id: 1,
        title: "First note",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Second note",
        isCompleted: false,
    },
    {
        id: 3,
        title: "Third note",
        isCompleted: false,
    },
    {
        id: 4,
        title: "Fourth note",
        isCompleted: false,
    },
    {
        id: 5,
        title: "Fifth note",
        isCompleted: false,
    },]

const List = () => {
    const [todos, setTodos] = useState(initialtodos)

    const handlerCreate = (newTitle) => {
        setTodos([...todos, {title: newTitle, id: todos.length + 1}])
    }

    const handlerEdit = (id) => {

    }

    const handlerRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handlerCheck = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }
//<EditListItem handlerClose={handlerClose} handlerSave={handlerSave} show={show}/>
return (
    <div className="list">
        <CreateListItem handlerCreate={handlerCreate}/>
        <div className="list__title">List Component</div>
        <div className="list__items">
            {
                todos.map(todos =>
                    <ListItem
                        key={todos.id}
                        {...todos} //id + title + isComplited
                        handlerEdit={handlerEdit}
                        handlerRemove={handlerRemove}
                        handlerCheck={handlerCheck}
                    ></ListItem>
                )}
        </div>

    </div>
)
}
export default List;