// import React, {useState} from 'react';

// export const AddTodo = ({addTodo}) => {
//     const[title,setTitle]= useState("");
//     const[desc,setDesc]= useState("")

    
//     const submit = (e) => {
//         e.preventDefault();
//         if (!title || !desc) {
//             alert("Title or Description cannot be blank");
//         }
//         else {
//             addTodo(title, desc);
//             setTitle("");
//             setDesc("");
//         }
//     }

//     return (
//         <div className="container" my-3>
//             <h3>Add you Task</h3>

//             <form onSubmit={submit}>
               
//   <div className="mb-3">
//     <label htmlFor="title" value={title}  onChange={(e)=>setTitle(e.target.value)} className="form-label">Task Name</label>
//     <input type="text" className="form-control" id="header" aria-describedby="Header"/>
//     {/* <div id="help" className="form-text">Please enter the Title of your Task</div> */}
//   </div>
//   <div className="mb-3">
//     <label htmlFor="desc" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-label">Description</label>
//     <input type="text" className="form-control" id="desc"/>
//   </div>
  
    
//   <button type="submit" className="btn lg btn-succes">Add Task</button>
// </form>
// </div>
            
        
//     )
// }
import React, { useState } from 'react';
let tasks ={
    padding: "40px",
    textAlign: "center",
    background: "MediumSeaGreen",
    color: "white",
}

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-4">
            <h3 style={tasks}>Add a Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Name</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}
