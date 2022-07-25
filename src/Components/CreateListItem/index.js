import "./style.css"
import React, {useState} from "react";

const CreateListItem = ({handlerCreate}) => {
    const [title, setTitle] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerCreate(title);
        setTitle('');
    }
  return (
      <div>
        <form onSubmit={handlerSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input value={title} onChange={onChangeTitle} id="title" type="text"/>
            </div>
            <button disabled={!title.length} type="submit">Submit</button>
        </form>
      </div>
  )
}
export default CreateListItem;