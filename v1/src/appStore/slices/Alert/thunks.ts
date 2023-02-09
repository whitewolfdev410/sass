import { createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { AlertProps } from "../../../types";

export const addAlert = createAsyncThunk(
  "alert/new",
  (newAlert: AlertProps & { id: string }) => newAlert
);

export const removeAlert = createAsyncThunk("alert/remove", (id: string) => id);
