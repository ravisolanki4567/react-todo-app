import { useState } from "react";
import { AddTodo, TodoItem, Message } from "./components/Todos";
import { Header } from "./components/Layout";
import generateRandomString from "./helpers/generateRandomString";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoUpdateObj, setTodoUpdateObj] = useState({});
  let todoCounts = todoItems.length;
  let content = todoCounts === 0 && <Message />;

  const hanldeNewItem = (itemName, itemDueDate) => {
    setTodoItems([
      { todoId: generateRandomString(), name: itemName, dueDate: itemDueDate },
      ...todoItems,
    ]);
  };

  const onUpdateHandler = (updateObject) => {
    setTodoUpdateObj(updateObject);
  };

  const onDeleteTodoHandler = (id) => {
    setTodoItems((previousItems) => {
      return previousItems.filter((item) => item.todoId !== id);
    });
  };

  if (todoCounts > 0) {
    content = (
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            name={item.name}
            dueDate={item.dueDate}
            todoId={item.todoId}
            onDeleteTodo={onDeleteTodoHandler}
            onUpdateTodo={onUpdateHandler}
          />
        ))}
      </div>
    );
  }

  return (
    <center className="todo-container">
      <Header todoCounts={todoCounts} />
      <AddTodo onNewItem={hanldeNewItem} todoUpdateObj={todoUpdateObj} />
      {content}
    </center>
  );
}

export default App;
