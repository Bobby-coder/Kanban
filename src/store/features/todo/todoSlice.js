import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("todos")) || [],
  filteredItems: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: crypto.randomUUID(),
        columnName: "To Do",
        ...action.payload,
      });

      // update filtered items list whenever items list changes
      state.filteredItems = state.items;

      // update localStorage whenever items list changes
      localStorage.setItem("todos", JSON.stringify(state.items));
    },

    updateFilteredItems: (state, action) => {
      if (action.payload === "") {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(({ title }) => {
          return title.toLowerCase().includes(action.payload.toLowerCase());
        });
      }
    },

    moveTask: (state, action) => {
      const { id, toColumn } = action.payload;
      const task = state.items.find((item) => item.id === id);

      // if task is present, then update its column
      if (task) {
        task.columnName = toColumn;
      }

      // update filtered items whenever items list changes
      state.filteredItems = [...state.items];

      // update local storage whenever items list changes
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
  },
});

export const { addTask, updateFilteredItems, moveTask } = todoSlice.actions;
export default todoSlice.reducer;
