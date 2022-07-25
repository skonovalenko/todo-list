import "./style.css";
import React, {useState} from "react";

const ListItem = (props) => {
    const {id, title, isCompleted, handlerEdit, handlerRemove, handlerCheck} = props;
    return (
    <div>
        <div className="list-item">
            <p
                className={`list-item__title list-item__title--${
                    isCompleted ? "checked" : null
                }`}>
                {title}
            </p>
            <div className="list-item__btns-wrapper">
                <input onClick={() => handlerCheck(id)} className="list-item__checkbox" type="checkbox"/>
                <i onClick={() => handlerEdit(id)} className="fa fa-pencil" aria-hidden="true"/>
                <i onClick={() => handlerRemove(id)} className="fa fa-trash" aria-hidden="true"/>
            </div>
        </div>
    </div>
    )
}
export default ListItem