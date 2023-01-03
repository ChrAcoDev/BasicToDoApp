import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import useAppSelector from './hooks/useAppSelector';

function App() {
  const todoList = useAppSelector(state => state.todoReducer.todoList);

  return (<>
    <Header />
    <InputForm />
    <TodoList todoList={todoList} />
  </>);
}

export default App;
