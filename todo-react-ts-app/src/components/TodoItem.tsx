import { Fragment } from "react";
import { styles } from "../style/todoList.style";
import { useTodosContext } from "../context/todoContext";
interface TodosItemPropsType {
  id: number;
  todo: string;
}
function TodosItem({ id, todo }: TodosItemPropsType) {
  const { removeTodo } = useTodosContext();
  return (
    <Fragment>
      <li key={id} style={styles.todoListItem}>
        <span style={styles.todoListText}>{todo}</span>
        <button onClick={() => removeTodo(id)} style={styles.todoListButton}>
          Delete
        </button>
      </li>
    </Fragment>
  );
}
export { TodosItem };
