import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";

const ToDoList = ({ getId, list, editableContent }) => {
  const [clickedRow, setClickedRow] = useState([]);
  const handleCompletedTasks = (id) => {
      setClickedRow([...clickedRow, id]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="">
            <div className=" my-10 ">
              {list.map((item, index) => (
                <div
                  className="grid grid-cols-2  "
                  key={index}
                >
                  <div
                  className="text-left"
                    style={{
                      textDecoration:
                        clickedRow.indexOf(index+1) !== -1
                          ? "line-through"
                          : "none",
                    }}
                  >
                    {" "}
                    {index + 1 + " "}. {item}{" "}
                  </div>
                  <div className="text-right">
                    <button
                      title="task-completed"
                      onClick={() => handleCompletedTasks(index+1)}
                    >
                      <IoCheckmarkDoneCircle className="text-green-400  hover:scale-125 hover:text-green-500 duration-200" />
                    </button>

                    <button title="edit" onClick={() => editableContent(index)}>
                      <BiSolidEdit className="mx-5 text-orange-300 hover:text-orange-500 hover:scale-125 duration-200"  />
                    </button>

                    <button title="delete" onClick={() => getId(index)}>
                      <FaCircleXmark  className="text-red-400 hover:text-red-500 hover:scale-125 duration-200" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
