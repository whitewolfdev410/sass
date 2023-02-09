import { addAlert, removeAlert } from "../../appStore";
import { AlertProps } from "../../types";
import { v4 as uuid } from "uuid";

export const addNewAlert = (dispatch: any, newAlert: AlertProps) => {
  const id = uuid();
  dispatch(addAlert({ id, ...newAlert }));
  setTimeout(() => {
    console.log("remove alert id", id);
    dispatch(removeAlert(id));
  }, 4000);
};
