import SearchBar from "./components/SearchBar";
import Column from "./components/Column";
import {
  CheckCheck,
  CircleCheckBig,
  CircleDot,
  CirclePlus,
  Kanban,
} from "lucide-react";
import AddTaskDialog from "./components/AddTaskDialog";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Handler to add task
  function handleAddTask() {
    setIsOpen(true);
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 ">
      {/* Search & Add */}
      <div className="flex flex-col justify-between md:flex-row">
        <SearchBar />
        <button
          className="h-10 px-4 py-2 bg-[#0A1B29] text-[#F9FCFF] hover:bg-[#0A1B29]/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium mt-2 md:mt-0"
          onClick={handleAddTask}
        >
          Add Task
          <CirclePlus size={20} className="ml-1" />
        </button>
      </div>

      {/* Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max my-3">
        <Column title="To Do" icon={<CircleCheckBig />} />
        <Column title="In Progress" icon={<CircleDot />} />
        <Column title="Peer Review" icon={<Kanban />} />
        <Column title="Done" icon={<CheckCheck />} />
      </div>

      {/* Add task dialog */}
      {isOpen && <AddTaskDialog setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
