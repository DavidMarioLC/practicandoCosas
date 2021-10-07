import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [update, setUpdate] = useState(false);
  const [todoUpdate, setTodoUpdate] = useState({});

  const createTodo = (e) => {
    e.preventDefault();

    const id = uuid();
    setTodos([...todos, { id, value: inputValue }]);

    setInputValue("");
  };

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setInputValue(todo.value);
    setTodoUpdate(todo);
    setUpdate(true);
  };

  const updateTodo = (e) => {
    e.preventDefault();

    const newList = todos.map((todo) => {
      if (todo.id === todoUpdate.id) {
        return { ...todo, value: inputValue };
      }
      return todo;
    });

    setTodos(newList);
    setUpdate(false);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    const newListTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newListTodo);
  };

  return (
    <>
      <FormCreateTodos
        createTodo={createTodo}
        setInputValue={setInputValue}
        inputValue={inputValue}
        update={update}
        updateTodo={updateTodo}
      />
      <ListTodos todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </>
  );
}

const FormCreateTodos = ({
  createTodo,
  setInputValue,
  inputValue,
  update,
  updateTodo,
}) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="add new todo.."
      />
      {update ? (
        <button onClick={updateTodo}>Update</button>
      ) : (
        <button onClick={createTodo}>Save</button>
      )}
    </form>
  );
};

const ListTodos = ({ todos, editTodo, deleteTodo }) => {
  const listElements = todos.map((todo, i) => (
    <li key={i}>
      <p>{todo.value}</p>
      <button onClick={() => editTodo(todo.id)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  ));

  return <ul>{listElements}</ul>;
};

export default App;
