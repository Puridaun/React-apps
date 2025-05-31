import { use, useState } from 'react'
import './App.css';
import Headbar from './components/Headbar';
import TodoForm from './components/TodoForm';
import TodoItemsList from './components/TodoItemsList';
import TodoItemsFilter from './components/TodoItemsFilter';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItemId, setTodoItemId] = useState(1);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredTodoList, setFilteredTodoList] = useState([])

  console.log('todoList', todoList)



  const addTodoItem = (e) => {

    e.preventDefault();

    const form = new FormData(e.target)
    const newTodoList = [...todoList];

    newTodoList.push({
      id: todoItemId,
      todoItem: form.get('todo-text'),
      isCompleted: false
    });

    setTodoList(newTodoList);
    setFilteredTodoList(newTodoList)
    setTodoItemId(todoItemId + 1);
    setInputValue('')
  }

  const handleTodoItem = (id) => {

    const newTodoList = [...todoList];
    const todoIndex = newTodoList.findIndex((todo) => todo.id === id)

    newTodoList.splice(todoIndex, 1)
    setTodoList(newTodoList)
    setFilteredTodoList(newTodoList)
  }

  const handleCheckBox = (id) => {

    const newTodoList = [...todoList];
    const todoIndex = newTodoList.findIndex((todo) => todo.id === id)

    newTodoList[todoIndex].isCompleted = !newTodoList[todoIndex].isCompleted

    setTodoList(newTodoList)
    setFilteredTodoList(newTodoList)
  }

  const isLightTheme = () => {
    setIsDarkTheme(!isDarkTheme)

    if (!isDarkTheme) {
      document.body.style.backgroundColor = '#191a29'
    } else {
      document.body.style.backgroundColor = 'var(--Body-background-color)'
    }
  }

  const handleCompletedTodos = () => {

    const newTodoList = todoList.filter((todo) => todo.isCompleted !== true)

    setFilteredTodoList(newTodoList);
    setTodoList(newTodoList)
  }

  const showAllTodos = () => {
    setFilteredTodoList(todoList)
  }

  const showActiveTodos = () => {

    const activeTodos = todoList.filter((todo) => todo.isCompleted === false)
    setFilteredTodoList(activeTodos)
  }

  const showCompletedTodos = () => {

    const activeTodos = todoList.filter((todo) => todo.isCompleted !== false)
    setFilteredTodoList(activeTodos)
  }

  return (
    <>
      <Headbar isDarkTheme={isDarkTheme} isLightTheme={isLightTheme} />
      <TodoForm addTodoItem={addTodoItem} isDarkTheme={isDarkTheme} setInputValue={setInputValue} inputValue={inputValue} />
      <TodoItemsList filteredTodoList={filteredTodoList} isDarkTheme={isDarkTheme} handleTodoItem={handleTodoItem} handleCheckBox={handleCheckBox} />
      <div className={`filter-item-list ${todoList.length === 0 ? "hide" : ""} ${isDarkTheme ? 'dark-theme' : ''} `}>
        <span>{todoList.length} items left</span>
        <div className='hide'>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <span className={isDarkTheme ? 'dark-theme' : ''} onClick={handleCompletedTodos}>Clear Completed</span>
      </div>
      <TodoItemsFilter todoList={todoList} isDarkTheme={isDarkTheme} showAllTodos={showAllTodos} showActiveTodos={showActiveTodos} showCompletedTodos={showCompletedTodos} />

    </>
  )
}

export default App
