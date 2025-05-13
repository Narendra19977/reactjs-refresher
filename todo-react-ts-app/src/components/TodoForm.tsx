import React from "react";
import { useTodosContext } from "../context/todoContext";
import { styles } from "../style/todoForm.style";
interface TodoFormPropsType {
  todo: string;
  onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function TodoForm({ todo, onChangeTodo }: TodoFormPropsType) {
  const { addTodo } = useTodosContext();
  return (
    <form onSubmit={(e) => addTodo(e, todo)} style={styles.todoFormContainer}>
      <input
        type="text"
        onChange={onChangeTodo}
        value={todo}
        placeholder="Enter a todo..."
        style={styles.todoFormInput}
      />
      <button
        type="submit"
        style={styles.todoFormSubmitButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
