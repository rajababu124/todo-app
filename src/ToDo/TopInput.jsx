import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
// getInputList is a callback function here that is to pass the value (inputValue) from this component(child) to parent component 
const TopInput = ({getInputList}) => {
  const [inputValue, setInputValue] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    if(inputValue){
      getInputList(inputValue);
      setInputValue("");
    }
  };
  return (
    <>
      <div className="container">
        <div >
          <form onSubmit={submitForm} className=" font-serif grid grid-cols-4">
          <div className="col-span-3">
            <input
              type="text"
              placeholder="Add your todo.."
              value={inputValue}
              className="focus:shadow-2xl  bg-cyan-100 w-full focus:outline-none border rounded-full pl-4 p-2 text-cyan-900 ml-50"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="hover:scale-150 duration-200 mt-3">
            <button  type="submit" className="" >
            <h4><FaPlus /></h4>  
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TopInput;
