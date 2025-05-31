const TodoForm = ({ addTodoItem, isDarkTheme, inputValue, setInputValue }) => {
    return (
        <form onSubmit={addTodoItem}>
            <input
                className={`todo-input ${isDarkTheme ? 'dark-theme' : ''}`}
                type='text'
                placeholder='Create a new todo...'
                name='todo-text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            ></input>
        </form>);
}

export default TodoForm;