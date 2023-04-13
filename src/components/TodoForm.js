import React, { useState } from 'react'

 
const TodoForm = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        // console.log(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }

   return (
       <div>
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
       </div>
   );
};
 
export default TodoForm;