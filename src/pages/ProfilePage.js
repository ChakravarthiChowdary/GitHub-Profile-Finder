import {
  Button,
  Container,
  makeStyles,
  Paper,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import ArrowBack from "@material-ui/icons/ArrowBack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getUserProfile } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  paper: {
    // height: "90%",
  },
  button: {
    marginBottom: 10,
  },
  photoDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: 20,
    marginTop: 20,
  },
  bioDiv: {
    marginTop: 20,
    padding: 20,
  },
  underline: {
    width: 70,
    backgroundColor: "#e74c3c",
    display: "block",
    height: 3,
    content: " ",
    marginTop: 5,
    marginBottom: 10,
  },
  githubButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  followingPaper: {
    minHeight: 100,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  followingDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const param = useParams();
  const dispatch = useDispatch();
  const { profile, loading, profileError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserProfile(param.id));
  }, [dispatch, param.id]);

  return (
    <Container className={classes.container}>
      <div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ArrowBack />}
          className={classes.button}
          onClick={() => history.goBack()}
        >
          Go back
        </Button>
      </div>
      <Paper className={classes.paper} elevation={6}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={classes.photoDiv}>
              <Avatar
                alt=""
                src={profile.avatar_url}
                className={classes.large}
              />
              <Typography variant="h5">{profile.name}</Typography>
              <Typography>Location: {profile.location}</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.bioDiv}>
              <Typography variant="h6">Profile Bio</Typography>
              <div className={classes.underline}></div>
              <Typography>{profile.bio}</Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.githubButton}
                startIcon={<GitHub />}
                onClick={() => window.open(profile.html_url, "_blank")}
              >
                Github Profile
              </Button>
              <Typography variant="h6">Details</Typography>
              <div className={classes.underline}></div>
              <Typography>Username : {profile.name}</Typography>
              <Typography>Company : {profile.company}</Typography>
              <Typography>Website : {profile.blog}</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={6} className={classes.followingPaper}>
        <div className={classes.followingDiv}>
          <Typography>{profile.followers}</Typography>
          <Typography variant="h6">Followers</Typography>
        </div>
        <div className={classes.followingDiv}>
          <Typography>{profile.following}</Typography>
          <Typography variant="h6">Following</Typography>
        </div>
        <div className={classes.followingDiv}>
          <Typography>{profile.public_repos}</Typography>
          <Typography variant="h6">Public Repos</Typography>
        </div>
        <div className={classes.followingDiv}>
          <Typography>{profile.public_gists}</Typography>
          <Typography variant="h6">Public Gists</Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
