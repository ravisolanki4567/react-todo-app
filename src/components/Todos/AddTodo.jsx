import { useState, useEffect } from "react";
import { Button, FormInput } from "../UI";

function AddTodo({ onNewItem, todoUpdateObj }) {
  const { selectedTodoName, dueDate: dueDateRename } = todoUpdateObj;

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChnage = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  useEffect(() => {
    if (Object.keys(todoUpdateObj).length > 0) {
      setTodoName(selectedTodoName);
      setDueDate(dueDateRename);
    }
  }, [selectedTodoName, dueDateRename]);

  return (
    <div className="container text-center">
      <form>
        <div className="row kg-row">
          <div className="col-6">
            <FormInput
              type="text"
              placeHolder="Enter Todo Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <FormInput
              type="date"
              value={dueDate}
              onChange={handleDateChnage}
            />
          </div>
          <div className="col-2">
            <Button
              type={"submit"}
              btnClasses={"btn-success"}
              onClick={handleAddButtonClicked}
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
