import React from 'react'
import Todo2 from './Todo2'

function TodoList({toDoList, handleToggle, handleFilter, doneApp, deleteApp}) {
    // const data = [
    //     "Star Wars", "Return of the Jedi", "Empire Strikes Back",
    // ]
    // const [ movies, setMovies ] = useState(data);
    return(
        <div>
            {toDoList.map((todo) => {
                return (
                   <div>
                     <Todo2 todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} doneApp={doneApp} deleteApp={deleteApp}/>
                   </div>
                )
            })}
            <div>
                <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
            </div>
            
        </div>
    )
}

export default TodoList;