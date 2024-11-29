import React from "react";

const FormTodo = ({ listTodo, setListTodo }) => {
    const refTodo = React.useRef(null);

  const handleAddTodo = () => {
    setListTodo([
      ...listTodo,
      {
        description: refTodo.current.value,
      },
    ]);
    refTodo.current.value = "";
  };





  return (
    <div className="todo-form p-4 rounded-md border border-gray-600 ">
      <form action="">
        <label htmlFor="" className="italic text-sm">
          Add To do
        </label>
        <input
          type="text"
          className="px-2 py-3 rounded-md border border-blue-300 text-black w-full outline-none"
          ref={refTodo}
        />
        <ul className="mt-5">
          <li className="py-2">
            <button
              className="px-3 rounded-lg bg-blue-950 w-full py-3 font-bold"
              type="button"
              onClick={handleAddTodo}
              
            >
              ADD
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormTodo;
