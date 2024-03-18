import { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { todoContext } from "./store/apicontext";
function AddTodo() {
  // const [todoName, setTodoName] = useState(); // Commented out
  const [dueDate, setDueDate] = useState();
  const noOfUpdates = useRef();

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
 const {newItems}=useContext(todoContext);
 
  const onclickButton = () => {
    const todoName = noOfUpdates.current.value;
    if (todoName.length !== 0) {
      noOfUpdates.current.value = "";
      newItems(todoName, dueDate);
      setDueDate("");
    } else {
      alert("There is nothing to add");
    }
  };

  return (
    <div className="container row kg-row">
      <div className="col-6">
        <input type="text" placeholder="Enter text here" ref={noOfUpdates} />
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          onClick={onclickButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
