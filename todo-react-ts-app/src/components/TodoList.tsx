import { useTodosContext } from "../context/todoContext";
import { styles } from "../style/todoList.style";
import { TodosItem } from "./TodoItem";

function TodoList() {
  const { todos, removeTodo } = useTodosContext();

  return (
    <ul style={styles.todoListContainer as React.CSSProperties}>
      {todos.map(({ id, todo }) => (
        <TodosItem id={id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
