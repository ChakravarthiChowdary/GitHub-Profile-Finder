import { CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  spinnerDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.spinnerDiv}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Spinner;
