import {
  Button,
  makeStyles,
  Paper,
  Snackbar,
  TextField,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import React, { useState } from "react";
import { Search } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";

import { getProfiles, CLEAR_PROFILES, SET_SEARCH_TEXT } from "../store/actions";

const useStyles = makeStyles({
  paper: {
    marginTop: 20,
    padding: 30,
    width: "70%",
  },
  searchInput: {
    marginBottom: 20,
  },
  clearButton: {
    marginTop: 10,
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchText);
  const [open, setOpen] = useState(false);
  const profiles = useSelector((state) => state.profiles);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const searchClickedHandler = () => {
    if (searchText !== "") {
      dispatch(getProfiles(searchText));
    } else {
      setOpen(true);
    }
  };

  const clearClickedHandler = () => {
    dispatch({ type: SET_SEARCH_TEXT, payload: "" });
    dispatch({ type: CLEAR_PROFILES });
  };

  return (
    <Paper elevation={5} className={classes.paper}>
      <TextField
        placeholder="Search Profile..."
        variant="outlined"
        size="small"
        className={classes.searchInput}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        fullWidth
        onChange={(event) =>
          dispatch({ type: SET_SEARCH_TEXT, payload: event.target.value })
        }
        value={searchText}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={searchClickedHandler}
      >
        Search
      </Button>
      {profiles.length > 0 && (
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={classes.clearButton}
          onClick={clearClickedHandler}
        >
          Clear
        </Button>
      )}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Profile name cannot be empty !
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default SearchBar;
