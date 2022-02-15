import React from 'react';
const ToDoLists =(props) =>{
    const deleteItems=() => {
        console.log("deleted")
    }
   return (
       <div>
           <div className="todo_style">

<div  className="fa fa-itmes"
  onClick={() =>{
      props.onSelect(props.id);

  }}
  >x

</div>
  {/* <i className="fa fa-itmes" aria-hidden="true"   */}

 
 
 
   <li> {props.text} </li>
   </div>
   </div>

   );
}
export default ToDoLists;