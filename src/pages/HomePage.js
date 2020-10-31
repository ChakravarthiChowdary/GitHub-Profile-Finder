import { Container, makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import Spinner from "../components/Spinner";
import { CHANGE_CURRENT_PAGE } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  SearchBarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  profileCardsContainer: {
    marginTop: 20,
  },
  paginationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { profiles, loading, currentPage } = useSelector((state) => state);

  const indexOfLastProfile = currentPage * 8;
  const indexOfFirstProfile = indexOfLastProfile - 8;
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  const pageChangedHandler = (event, value) => {
    dispatch({ type: CHANGE_CURRENT_PAGE, payload: value });
  };

  return (
    <Fragment>
      <Container className={classes.SearchBarContainer}>
        <SearchBar />
      </Container>
      <Container maxWidth="lg" className={classes.profileCardsContainer}>
        {loading && <Spinner />}
        <Grid container className={classes.root} spacing={4}>
          {currentProfiles.map((profile) => (
            <ProfileCard profile={profile} key={profile.id} />
          ))}
        </Grid>
      </Container>
      {profiles.length > 0 && (
        <Container maxWidth="lg" className={classes.paginationContainer}>
          <Pagination
            count={Math.ceil(profiles.length / 8)}
            color="primary"
            onChange={pageChangedHandler}
          />
        </Container>
      )}
    </Fragment>
  );
};

export default HomePage;
