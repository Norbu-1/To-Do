import {  createContext } from "react";
import React, { useReducer, useState } from "react";
export const todoContext=createContext({todoitems:[],
    newItems:()=>{},
    onClickDelBtn:()=>{}
    });
    const todoReducer=(todoItems,action)=>
    {
      let newTodo=todoItems;
     if(action.type==="Add_todo")
     {
        newTodo=[...todoItems,{name: action.payload.items,
           duedate: action.payload.date}]
     }
     else if(action.type==="Del_todo")
     {
      newTodo=todoItems.filter(item=>item.name!==action.payload.todoname);
         
     }
     return newTodo;
    }
    function TodoContextProvider({children})
    {
        const [todoItems,dispatchtodo]=useReducer(todoReducer,[]);
  
        const onClickDelBtn=(todoname,tododate)=>
        {
          const newTodoDel={
            type: "Del_todo",
            payload:{
              todoname,
            }
          }
          dispatchtodo(newTodoDel);
          // const newTodoItems=todoItems.filter(item=>item.name!==todoname);
          // setTodoItems(newTodoItems);
          // console.log(`deleted ${todoname} and ${tododate}`);
        }
      
      const newItems=(items,date)=>
      {
        const newTodoAdd={
          type:"Add_todo",
          payload:{
            items,date,
          }
        }
        dispatchtodo(newTodoAdd);
      //   const newTodo=[...todoItems,{name: items,
      //   duedate: date}]
      //  setTodoItems(newTodo);
      //  console.log(`${items} and ${date}`);
      }
      return  <todoContext.Provider value={{todoitems:todoItems,
        newItems:newItems,
        onClickDelBtn:onClickDelBtn
        }}>{children}
            </todoContext.Provider>
    }
    export default TodoContextProvider;