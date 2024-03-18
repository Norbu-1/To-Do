import AppName from "./AppName";
import AddTodo from "./AddTodo";
import Todoitems from "./Todoitems";
import WelcomeFun from "./WelcomeFun";
import TodoContextProvider from "./store/apicontext";

//API CONTEXT
//USE STATE
//use rEDUCER
//USE REFERENCE
function App() {
  // let [todoItems,setTodoItems]=useState([{
  //   name:"Buy Milk",
  //   duedate:"12-12-2023"
  // },
  // {
  //   name:"Goto College",
  //   duedate:"2-12-2023"
  // },
  // {
  //   name:"Practice DSA",
  //   duedate:"7-1-2024"
  // },
  // {
  //   name:"Cricket tournament",
  //   duedate:"12-01-2024"
  // }]);

  


  return <TodoContextProvider >
  <center id="todo-container">
      <AppName />
      <AddTodo />
      <WelcomeFun /> 
      <Todoitems/>
    </center>
    </TodoContextProvider>
}

export default App;
