import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  1: {
    id: 1,
    title: "A bug in Top Page",
    status: 0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createBy: "",
  },
  2: {
    id: 2,
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: 0,
    createBy: "",
  },
  3: {
    id: 3,
    title: "fix layout",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: 1,
    createBy: "",
  },
};

const IssueSlice = createSlice({
  name: "Issue",
  initialState,
  reducers: {
    deleteIssue: (state, action) => {
      delete state[action.payload];
    },
    addIssue: (state, action) => {
      const maxId = Object.keys(state).reduce(
        (max, currentId) => Math.max(max, parseInt(currentId)),
        0
      );
      const newId = maxId + 1;
      state[newId] = {
        id: newId,
        title: action.payload.title,
        description: action.payload.description,
        status: 0,
        createBy: "",
      };
    },
    updateIssue: (state, action) => {
      const { id, title, description, status } = action.payload;
      state[id] = {
        ...state[id],
        title,
        description,
        status,
      };
    },
  },
});

export const { deleteIssue, addIssue, updateIssue } = IssueSlice.actions;
export default IssueSlice.reducer;
