import React, { useRef } from "react";

const ListTodo = ({ listTodo }) => {
  return (
    <div className="list-todo">
      <h5 className="text-center my-5 text-xl font-bold">List of your To-do</h5>
      <ul>
        {listTodo >= 0 ? (
          <h5 className="text-center opacity-40">No More Todo</h5>
        ) : (
          listTodo.map((item, key) => (
            <li
              className="p-2 border border-gray-600 mb-2 font-semibold text-xl uppercase rounded-md flex justify-between items-center"
              key={key}
            >
              • {item.description}{" "}
              <button
                className="px-1 rounded-lg bg-blue-950 w-[25%] py-2 text-sm"
                type="reset"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListTodo;
