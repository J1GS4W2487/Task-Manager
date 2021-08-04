import Header from './Header';
import {Footer} from './Footer';
import {Todos} from './Todos';
import {AddTodo} from './AddTodo';
import {About} from "./About";
import React, {useState,useEffect, desc,sno,title} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() 
  {
    let initTodo;
    if(localStorage.getItem("todos")===null){
    initTodo=[];
    }
    else{
      initTodo=JSON.parse(localStorage.getItem("todos"));
    }
  
{
    const onDelete = (todo)=>{
      // console.log("I am onelete odtodo", todo);
      // let index = todos.indexOf(todo);
      // todos.splice(index, 1)
      // wrong wy of dleting todos accoring to Harry Sir
      setTodos(todos.filter((e)=>{
        return e!==todo; 
      }));
      localStorage.setItem("todos",JSON.stringify(todos));
      
      }

  const addTodo = (title, desc)=>{
    console.log("ADDED TODO",title,desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      let sno= todos[todos.length-1].sno + 1;
    }

    const myTodo ={
     sno: sno,
     title: title, 
     desc: desc,
  }
  setTodos([...todos, myTodo]);
  console.log(myTodo);
  }
  

  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
    
    // {
    //   sno: 1,
    //   title: "Hi There!",
    //   desc: "Welcome to your Activity Manager"
    // },
    // {
    //   sno: 2,
    //   title: "Learn C with Harry",
    //   desc: "You need to learn C"
    // };
    
  
 return(
  <>
  <Router>
  <Header title="My Activities" searchBar="{false}"/>
  <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
            
          </Route>
          <Route exact path="/about">
          <About />
          </Route>
          </Switch>   
  
  <Footer/>
  </Router>
  </>
  
  );
 }
  }
export default App;
