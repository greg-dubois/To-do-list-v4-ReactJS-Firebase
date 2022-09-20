import { useEffect, useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import axios from "./axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    axios.get("/todos.json").then((response) => {
      const fetchedTodos = [];
      for (let key in response.data) {
        fetchedTodos.unshift({ ...response.data[key], id: key });
      }

      setTodos(fetchedTodos);
    });
  }, [reRender]);

  const addToDoHandler = (newToDo) => {
    axios.post("/todos.json", newToDo).then((response) => {
      setReRender((prev) => !prev);
    });
  };

  const removeToDoHandler = (id) => {
    axios.delete(`/todos/${id}.json`).then((response) => {
      setReRender((prev) => !prev);
    });
  };

  return (
    <>
      <NewToDo onAddToDo={addToDoHandler} />
      <ToDoList onRemoveToDo={removeToDoHandler} todos={todos} />
    </>
  );
}

export default App;
