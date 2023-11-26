import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openNewModal: (state) => {
      state.newModalOpen = true;
    },
    closeNewModal: (state) => {
      state.newModalOpen = false;
    },
    openEditModal: (state) => {
      state.editModalOpen = true;
    },
    closeEditModal: (state) => {
      state.editModalOpen = false;
    },
  },
});

export const { openEditModal, closeEditModal, openNewModal, closeNewModal } =
  modalSlice.actions;
export default modalSlice.reducer;
