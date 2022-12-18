import { useState } from 'react';
import './App.css';
import TodoClass from './classes/Todo';
import InputForm from './components/InputForm';
import Todos from './components/Todos';

function App() {
  const [todoList, setTodoList] = useState<TodoClass[]>([]);

  const onAddTodo = (todo: TodoClass) => {
    setTodoList((prev => [...prev, todo]));
  }

  const onDeleteTodo = (id: number) => {
    setTodoList((todoList.filter(todo => todo.id !== id)));
  }

  return (
    <div className="App">
      <InputForm onAddTodo={onAddTodo} />
      <Todos todoList={todoList} onDeleteTodo={onDeleteTodo} />
    </div>
  );
}

export default App;
