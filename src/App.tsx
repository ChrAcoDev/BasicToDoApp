import './App.css';
import InputForm from './components/InputForm';
import TodoHandler from './components/TodoHandler';
import Todos from './components/Todos';
import useAppSelector from './hooks/useAppSelector';

function App() {
  const todoList = useAppSelector(state => state.todoReducer.todoList);

  return (
    <div className="App">
      <InputForm />
      <TodoHandler />
      <Todos todoList={todoList} />
    </div>
  );
}

export default App;
