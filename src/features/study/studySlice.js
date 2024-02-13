import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  states: [
    {
      Id: "1",
      label: "Andhara Pradesh",
    },
    {
      Id: "2",
      label: "Arunachal Pradesh",
    },
    {
      Id: "3",
      label: "Bihar",
    },
    {
      Id: "4",
      label: "Delhi",
    },
    {
      Id: "5",
      label: "Gujarat",
    },
    {
      Id: "6",
      label: "Haryana",
    },
    {
      Id: "7",
      label: "Himachal Pradesh",
    },
    {
      Id: "8",
      label: "Indore",
    },
    {
      Id: "9",
      label: "Jammu and Kashmir",
    },
    {
      Id: "10",
      label: "Jharkand",
    },
    
    {
      Id: "11",
      label: "Karnataka",
    },
    {
      Id: "12",
      label: "Kerala",
    },
    {
      Id: "13",
      label: "Madhya Pradesh",
    },
    {
      Id: "14",
      label: "Maharastra",
    },
    {
      Id: "15",
      label: "Manipur",
    },
    {
      Id: "16",
      label: "Odisha",
    },
    {
      Id: "17",
      label: "Punjab",
    },
    {
      Id: "18",
      label: "Rajastan",
    },
    {
      Id: "19",
      label: "saurastra",
    },
    {
      Id: "20",
      label: "Tamil Nadu",
    },
    {
      Id: "21",
      label: "Telugana",
    },
    {
      Id: "22",
      label: "utharkhand",
    },
    {
      Id: "23",
      label: "Utter Pradesh",
    },
    {
      Id: "24",
      label: "West Bengal",
    },
  ],
};

export const studySlice = createSlice({
  name: "study",
  initialState,

  reducers: {
    addState: (state, action) => {
      state.states.push(action.payload);
    },

    clearState: (state, { payload }) => {
      state.states = payload;
    },
  },
});

export const { addState, clearState } = studySlice.actions;
export default studySlice.reducer;
