import { use, useState } from 'react'
import './App.css'

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

      <div className='top-background'>
        <img src={isDarkTheme ? './src/assets/Bitmap-Moon.svg' : './src/assets/Bitmap-Sun.svg'} />
      </div>
      <div className='change-theme'>
        <h1>TODO</h1>
        <img onClick={isLightTheme} src={isDarkTheme ? './src/assets/Sun.svg' : './src/assets/Moon.svg'}></img>
      </div>
      <form onSubmit={addTodoItem}>
        <input
          className={`todo-input ${isDarkTheme ? 'dark-theme' : ''}`}
          type='text'
          placeholder='Create a new todo...'
          name='todo-text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </form>
      {filteredTodoList.map((todo) => (
        <div key={todo.id} className={`todo-items-list ${isDarkTheme ? 'dark-theme' : ''}`}>
          <input type='checkBox' onChange={() => handleCheckBox(todo.id)}></input>
          <span className={`${todo.isCompleted === true ? "checked-item-text" : ""} ${isDarkTheme ? 'dark-theme' : ''} `}>{todo.todoItem}</span>
          <button type='button' onClick={() => handleTodoItem(todo.id)}><img src='./src/assets/Delete-icon.svg' /></button>
        </div>
      ))}
      <div className={`filter-item-list ${todoList.length === 0 ? "hide" : ""} ${isDarkTheme ? 'dark-theme' : ''} `}>
        <span>{todoList.length} items left</span>
        <div className='hide'>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <span className={isDarkTheme ? 'dark-theme' : ''} onClick={handleCompletedTodos}>Clear Completed</span>
      </div>
      <div className={`filter-comands ${todoList.length === 0 ? "hide" : ""} ${isDarkTheme ? 'dark-theme' : ''}`}>
        <span className={isDarkTheme ? 'dark-theme' : ''} onClick={showAllTodos}>All</span>
        <span className={isDarkTheme ? 'dark-theme' : ''} onClick={showActiveTodos}>Active</span>
        <span className={isDarkTheme ? 'dark-theme' : ''} onClick={showCompletedTodos}>Completed</span>
      </div>
    </>
  )
}

export default App
