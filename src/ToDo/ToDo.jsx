import React, { useEffect, useState } from "react";
import TopInput from "./TopInput";
import EditInput from "./EditInput";
import ToDoList from "./ToDoList";

const getLocalData = () => {
  let data = localStorage.getItem('lists')
  let myData = JSON.parse(data)
  if(myData){
    return myData
  }else{
    return []
  }
}

const ToDo = () => {
  const [list, setList] = useState(getLocalData());
  const [editId, setEditId] = useState('');
  const [editValue, setEditValue] = useState('')


const setEdittedValue = (val) => {
  list[editId]  = val
}
const getId = (id) => {
const updatedList = list.filter((_, index) => index !== id);
setList(updatedList);
};

const editableContent = (id) => {
setEditId(id)
setEditValue(list[id])
}

const getInputList = (input) => {
  setList([...list, input]);
};

useEffect(() => {
localStorage.setItem('lists', JSON.stringify(list))
}, [list]);




  return (
    <>
      <div className="container">
        <div className=" ">
          <div className="">
            <div className="p-5 shadow-2xl h-96  rounded bg-cyan-900">
              { (editId || editId === 0) ?  <EditInput getId={getId} setEdittedValue={setEdittedValue} editVal={editValue} setEditId={setEditId}  /> : <TopInput getId={getId}  getInputList={getInputList}  />  }
              <ToDoList list={list} getId={getId} editableContent={editableContent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
