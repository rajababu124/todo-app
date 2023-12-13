import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";

// setEdittedValue is a callback function here that is to pass the edited value (inputValue) from this component(child) to parent component
const TopInput = ({ _, setEdittedValue, editVal, setEditId }) => {
  const [inputValue, setInputValue] = useState(editVal);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (inputValue) {
      setEdittedValue(inputValue);
      setInputValue("");
      setEditId("");
    }
  };
  return (
    <>
      <div className="container">
        <div className="">
          <form
            onSubmit={submitForm}
            className="grid grid-cols-4"
          >
            <div className="col-span-3 hover:shadow-2xl  ">
              <input
                type="text"
                placeholder=" Edit Here.."
                value={inputValue}
                className=" bg-cyan-100  w-full focus:outline-none border rounded-full pl-4 p-2  text-cyan-900 ml-50"
                onChange={changeHandler}
              />
            </div>
            <div className=" mt-3 hover:scale-150 duration-200">
              <button type="submit">
                <h4>
                  <BiSolidEdit />
                </h4>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TopInput;
