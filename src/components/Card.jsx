import { Grip } from "lucide-react";
import { useDrag } from "react-dnd";

/* eslint-disable react/prop-types */
const Card = ({ id, title, description }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`group flex flex-col gap-2 bg-white shadow-sm hover:shadow transition-all duration-300 cursor-grab p-4 space-y-3 ${
        isDragging && "opacity-50"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-lg hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <div className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <Grip size={16} />
        </div>
      </div>
      <p className="text-sm text-slate-500 break-all">{description}</p>
    </div>
  );
};

export default Card;
