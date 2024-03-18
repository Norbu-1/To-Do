import TodoItem from "./TodoItem";
import { useContext } from "react";
import { todoContext } from "./store/apicontext";
const Todoitems=()=>{
   const {todoitems}=useContext(todoContext);
  
    return<> 
    {todoitems.map((item)=>( <TodoItem todoname={item.name} tododate={item.duedate} />))}
   
    
    </>
}
export default Todoitems;