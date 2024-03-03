import { Button } from "../UI";

function TodoItem({ name, dueDate, todoId, onDeleteTodo, onUpdateTodo }) {
  const onDeleteHandler = () => {
    onDeleteTodo(todoId);
  };
  const onUpdateHandler = () => {
    onUpdateTodo({
      selectedTodoName: name,
      dueDate,
      todoId,
    });
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6"> {name}</div>
        <div className="col-4">{dueDate} </div>
        <div className="col-2">
          <Button
            type="button"
            btnClasses="btn-info btn-sm"
            onClick={onUpdateHandler}
          >
            Update
          </Button>
          <Button
            type="button"
            btnClasses="btn-danger btn-sm"
            onClick={onDeleteHandler}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
