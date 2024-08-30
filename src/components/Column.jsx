import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useDrop } from "react-dnd";
import { moveTask } from "../store/features/todo/todoSlice";

/* eslint-disable react/prop-types */
const Column = ({ title, icon }) => {
  const { filteredItems } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => {
      dispatch(moveTask({ id: item.id, toColumn: title }));
    },
  });

  return (
    <div
      ref={drop}
      className="flex flex-col gap-3 p-6 rounded-lg border border-slate-200 bg-white text-slate-950 bg-white/50 shadow-md hover:shadow-lg transition-shadow 
      duration-300"
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold leading-none tracking-tight mr-2">
          {title}
        </h1>
        {icon}
      </div>

      {/* Render Tasks based on column */}
      {filteredItems
        .filter((task) => task.columnName === title)
        .map(({ id, title, description }) => (
          <Card id={id} key={id} title={title} description={description} />
        ))}
    </div>
  );
};

export default Column;
