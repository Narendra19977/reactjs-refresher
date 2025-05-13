import { TodoType } from "../App";
import React from "react"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface TodoContextType {
  todos: TodoType[];
  todo: string;
  setTodo: React.Dispatch<SetStateAction<string>>;
  addTodo: (e: React.FormEvent<HTMLFormElement>, todo: string) => void;
  removeTodo: (id: number) => void;
}
export const TodosContext = createContext<TodoContextType | undefined>(
  undefined
);
interface TodosProviderType {
  children: React.ReactNode;
}
export const TodosProvider: React.FC<TodosProviderType> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todo, setTodo] = useState<string>("");
  const addTodo = (e: React.FormEvent<HTMLFormElement>, todo: string) => {
    e.preventDefault();
    const newTodo = { id: new Date().getTime(), todo };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo("");
  };
  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <TodosContext.Provider
      value={{ todos, todo, setTodo, addTodo, removeTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
export function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("you are using compoent which is wrapped in provider");
  }
  return context;
}
