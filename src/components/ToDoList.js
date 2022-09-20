import ToDoItem from "./ToDoItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <>
      <ul>
        {props.todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            date={todo.date}
            onRemoveToDo={props.onRemoveToDo.bind(null, todo.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
