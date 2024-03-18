import { useContext } from "react";
import { todoContext } from "./store/apicontext";
function TodoItem({todoname,tododate}){
  const {onClickDelBtn}=useContext(todoContext);
    return  <div class="container row kg-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger" onClick={()=>onClickDelBtn(todoname,tododate)}>
            Delete
          </button>
        </div>
      </div>
}
export default TodoItem;