const TodoItemsList = ({ filteredTodoList, isDarkTheme, handleTodoItem, handleCheckBox }) => {

    return (
        filteredTodoList.map((todo) => (
            <div key={todo.id} className={`todo-items-list ${isDarkTheme ? 'dark-theme' : ''}`}>
                <input type='checkBox' onChange={() => handleCheckBox(todo.id)} checked={todo.isCompleted}
                ></input>
                <span className={`${todo.isCompleted === true ? "checked-item-text" : ""} ${isDarkTheme ? 'dark-theme' : ''} `}>{todo.todoItem}</span>
                <button type='button' onClick={() => handleTodoItem(todo.id)}><img src='./src/assets/Delete-icon.svg' /></button>
            </div>
        ))
    );
}

export default TodoItemsList;