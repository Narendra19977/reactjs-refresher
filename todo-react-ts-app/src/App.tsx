import { useState } from "react";
import TodoForm from "../src/components/TodoForm";
import TodoList from "../src/components/TodoList";
import { styles } from "./style/app.style";
import { TodosProvider, useTodosContext } from "./context/todoContext";

export interface TodoType {
  todo: string;
  id: number;
}
interface TodosType {
  todos: Array<TodoType>;
}

export default function App() {
  const { todo, setTodo } = useTodosContext();
  function handleTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  return (
    <div style={styles.appContainer as React.CSSProperties}>
      <h1 style={styles.appHeaderText}>Todo React App</h1>
      <TodoForm onChangeTodo={handleTodo} todo={todo} />
      <TodoList />
    </div>
  );
}
