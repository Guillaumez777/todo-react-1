import React from 'react';
 
const Todo2 = ({todo, doneApp, deleteApp}) => {

   return (
       <div className={todo.complete ? "strike" : ""}>
          {todo.id} - {todo.task} 
          <button onClick={() => doneApp(todo.id)}>Done</button>
          <button onClick={() => deleteApp(todo.id)}>Delete</button>
       </div>
       
   );
};
 
export default Todo2;