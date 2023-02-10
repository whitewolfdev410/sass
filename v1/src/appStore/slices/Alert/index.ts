import { createSlice } from "@reduxjs/toolkit";
import { AlertProps } from "../../../types";
import { addAlert, removeAlert } from "..";

type AlertType = AlertProps & {
  id: string;
};

const initialState: AlertType[] = [];

const alertSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signout: () => {
      // deliberately left empty
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAlert.fulfilled, (state, action) => {
        return [...state, action.payload as unknown as AlertType];
      })
      .addCase(removeAlert.fulfilled, (state, action) => {
        return [...state.filter((alert) => alert.id !== action.payload)];
      });
  },
});

export const {} = alertSlice.actions;

export default alertSlice.reducer;
