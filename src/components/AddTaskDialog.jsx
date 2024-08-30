/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/features/todo/todoSlice";
import toast from "react-hot-toast";

const AddTaskDialog = ({ setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  // handler to close dialog
  function handleRemove() {
    setIsOpen(false);
  }

  // handler to add task
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(addTask({ title, description }));
      setIsOpen(false);
    } else {
      toast.error("All fields are required");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[300px] absolute top-[50%] left-[50%] p-4 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-3 rounded-lg border border-slate-200 bg-white text-slate-950 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#cccc]"
    >
      {/*Title input*/}
      <div>
        <label className="text-sm font-medium leading-none">Title</label>
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-full py-2 px-3 rounded-md text-black flex h-10 border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      {/*Description input*/}
      <div>
        <label className="text-sm font-medium leading-none">Description</label>
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Type your description here"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      {/*Add Button*/}
      <button
        className="h-10 px-4 py-2 bg-[#0A1B29] text-[#F9FCFF] hover:bg-[#0A1B29]/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium"
        type="submit"
      >
        Add
      </button>

      {/*Close Button*/}
      <div className="absolute top-[-5px] right-[-5px] z-30">
        <button
          className="flex items-center justify-center h-8 w-8 bg-red-600 text-white rounded-full border border-red-500 hover:bg-red-700
    focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 ease-in-out shadow-md"
          onClick={handleRemove}
        >
          <X size={16} />
        </button>
      </div>
    </form>
  );
};

export default AddTaskDialog;
