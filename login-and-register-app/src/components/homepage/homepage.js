import React, { useEffect } from 'react';
import { useState } from 'react';

import "./homepage.css";

const getLocalItem= () =>{                   // getter func
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  } else {
    return []
  }

}

const Homepage = ({setLoginUser}) => {
  

  const [newItem,setNewItem] = useState("");
  const [items,setItems] = useState(getLocalItem());
  function addItem(){
    if(!newItem){
      alert("Enter the item")
      return;
    }
    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem
      
    };
    setItems(oldlist=>[...oldlist,item]);
    setNewItem("");

  }

  
  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
  

  }
  // setter func
  useEffect(()=>{ 
   localStorage.setItem('lists',JSON.stringify(items));
  },[items])
  
 

    return (
        <div className='homepage'>
            <h1>To Do list</h1>
            <div className='input_btn'>
                <input type="text" placeholder='add item' value={newItem} onChange={e=>setNewItem(e.target.value)}/>
                <button onClick={() => addItem()}>Add</button>
            </div>
            <div className='item_head'><span>Items</span> <div className='remove'>Remove<span>Mark</span></div></div>
            
      <ul> 
        {items.map(item=>{
          return(
            <div className='input_item' key={item.id}>{item.value}<div><button className='del_btn' onClick={()=>deleteItem(item.id)}>x</button><input className='check_btn' type="checkbox" /></div></div>
          )
        })}
      </ul>
            <div className='button' onClick={()=> setLoginUser({})}>Logout</div>
        </div>
    )
}

export default Homepage