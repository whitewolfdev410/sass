import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Stack } from "@mui/material";

interface FormDialogPropTypes {
  open: boolean;
  title?: string;
  content?: ReactJSXElement;
  handleClose: () => void;
  handleConfirm: () => void;
}

const FormDialog = (props: FormDialogPropTypes) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <Stack
        padding={"100px 60px"}
        sx={{
          background:
            "linear-gradient(to top right, rgba(156, 77, 226, 0.15), rgba(255, 233, 201, 0.39))",
        }}
      >
        {props?.title && <DialogTitle>{props?.title}</DialogTitle>}
        {props?.content && <DialogContent>{props?.content}</DialogContent>}
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={props.handleClose}
            variant="outlined"
            color="inherit"
          >
            Cancel
          </Button>
          <Button
            onClick={props.handleConfirm}
            variant="contained"
            color="error"
          >
            Yes
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
};

export default FormDialog;
