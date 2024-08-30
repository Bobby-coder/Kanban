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
      className={`flex flex-col gap-2 bg-white shadow-sm hover:shadow transition-all duration-300 cursor-pointer p-4 space-y-3 ${
        isDragging && "opacity-50"
      }`}
    >
      <h3 className="font-medium text-lg hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-slate-500 break-all">{description}</p>
    </div>
  );
};

export default Card;
