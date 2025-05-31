const TodoItemsFilter = ({ todoList, isDarkTheme, showAllTodos, showActiveTodos, showCompletedTodos }) => {

    return (
        <div className={`filter-comands ${todoList.length === 0 ? "hide" : ""} ${isDarkTheme ? 'dark-theme' : ''}`}>
            <span className={isDarkTheme ? 'dark-theme' : ''} onClick={showAllTodos}>All</span>
            <span className={isDarkTheme ? 'dark-theme' : ''} onClick={showActiveTodos}>Active</span>
            <span className={isDarkTheme ? 'dark-theme' : ''} onClick={showCompletedTodos}>Completed</span>
        </div>
    );
}


export default TodoItemsFilter;