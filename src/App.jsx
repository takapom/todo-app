import { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4 } from "uuid";

function App(){
  const [todos, setTodos] = useState([{id: "1", name:"Todo1", complted: false}]);

  const todoNameref = useRef()
  
  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameref.current.value;
    setTodos((prevTodos) => { 
      return [...prevTodos, {id: uuidv4(), name: name, complted: false }]
    });
    todoNameref.current.value = null;
  };

  //チェックマークをオンオフにする
  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodo)
  }


  return(
    <>
    <TodoList todos={todos}/>
    <input type="text" ref={todoNameref}/>
    <button onClick={handleAddTodo}>タスク追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク：{todos.filter((todo) => !todo.complted).length}</div>
    </>
  );
};

export default App; 