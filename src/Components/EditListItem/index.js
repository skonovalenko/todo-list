import {Button, Modal} from "react-bootstrap";

const EditListItem = ({show, handlerClose, handlerSave}) => {
    return (
        <div className="edit-todo-form">
            <Modal show={show} onHide={handlerClose}>
                <Modal.Header closeButton>
                    <Modal.Title>EditTodo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="edit-todo-form__input-wrapper">
                        <label className="edit-todo-form__input-label" htmlFor="title">
                            Title:
                        </label>
                        <input
                            placeholder="Enter todo"
                            className="edit-todo-form__input"
                            id="text"
                            type="text"
                            defaultValue={newText}
                            onChange={onChangeText}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="edit-todo-form__btns-wrapper">
                        <button
                            onClick={handlerClose}
                            className="edit-todo-form__submit-btn"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handlerSubmit}
                            className="edit-todo-form__submit-btn"
                        >
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EditListItem;