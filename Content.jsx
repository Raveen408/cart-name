import React from 'react'
import { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";

const Content = () => {
  const [items,setItems] = useState (
    [
      {
        id:1,
        checked:false,
        item:"Practice Prgramming" ,
      },
      {
        id:2,
        checked:false,
        item:"Playing Cricket",
      },
      {
        id:3,
        checked:false,
        item:"Learn About AI",
        
      
      }
      
    ]
  )
  
  
const handleCheck = (id) => {
  const listItems = items.map((item)=> item.id===id ? {...item,checked:!item.checked}:item)
  setItems(listItems)
}
const handleDelete = (id) => {
  const listItems = items.filter((item) =>item.id!==id)
  setItems(listItems)
}


 
  return (
    <main>{(items.length) ? (
      <ul>
        {
            items.map ((item) =>(
            <li className='item' key={item.id}>
            <input
            type ='checkbox'
            onChange={() => handleCheck(item.id)}
            checked ={item.checked} />
            <label
            style={(item.checked)?{textDecoration: 'line-through'} : null}
            onDoubleClick={() => handleCheck(item.id)}>{item.item} 
              
            </label>
            
           <FaTrash 
           role='button'
           tabIndex="0"
           onClick={() => handleDelete(item.id)}/>
            </li>
          ))
        }
      </ul>) : (<p style={{justifyContent:'center', color:'white'}} >CONGRATULATION SUCCESSFULLY YOU FINSIHED YOUR WEEK ROUTINE</p>)
}
    </main>
    
  )
}


export default Content