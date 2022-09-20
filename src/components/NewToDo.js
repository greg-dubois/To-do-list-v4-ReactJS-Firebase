import { useRef } from "react";
import classes from "./NewToDo.module.css";

const NewToDo = (props) => {
  const todoTextRef = useRef();
  const todoDateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const newDate = new Date(todoDateRef.current.value);
    const formattedDate = newDate.toDateString();
    const newText = todoTextRef.current.value;
    const newToDo = {
      text: newText,
      date: formattedDate,
    };
    props.onAddToDo(newToDo);
    todoTextRef.current.value = "";
    todoDateRef.current.value = "";
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <label htmlFor="todo">TASK:</label>
        <input type="text" name="todo" ref={todoTextRef} />
        <label htmlFor="todoDate">COMPLETE BY:</label>
        <input type="date" ref={todoDateRef} name="todoDate" />
        <button> ADD +</button>
      </form>
    </div>
  );
};
export default NewToDo;
