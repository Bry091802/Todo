import React from "react";
import ListTodo from "./ListTodo";
import FormTodo from "./FormTodo";
import { ListTodoIcon } from "lucide-react";

const App = () => {
  const [listTodo, setListTodo] = React.useState([]);
  const [showListTodo, setShowListTodo] = React.useState(false);

  return (
    <div>
      <section className="min-h-screen bg-gray-200 flex justify-center items-center text-white">
        <div className="max-w-[500px] w-full bg-red-600 rounded-md p-4">
          <h3 className="text-center mb-5 text-xl font-bold">To-do List</h3>

          <FormTodo listTodo={listTodo} setListTodo={setListTodo} />

          <ListTodo listTodo={listTodo} setShowListTodo={setShowListTodo} />
        </div>
      </section>
    </div>
  );
};

export default App;
