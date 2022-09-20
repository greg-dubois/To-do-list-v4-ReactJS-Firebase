import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  return (
    <li onClick={props.onRemoveToDo}>
      TASK: {props.text} <br /> COMPLETE BY: {props.date}
    </li>
  );
};

export default ToDoItem;
