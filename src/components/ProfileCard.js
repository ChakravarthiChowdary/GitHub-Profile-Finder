import {
  Avatar,
  Button,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 200,
    width: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  name: {
    color: "#000",
  },
}));

const ProfileCard = ({ profile }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper elevation={5} className={classes.paper}>
        <Avatar
          alt="Remy Sharp"
          src={profile.avatar_url}
          className={classes.large}
        />
        <Typography variant="h6" className={classes.name}>
          {profile.login}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push(`/user/${profile.login}`)}
        >
          Details
        </Button>
      </Paper>
    </Grid>
  );
};

export default ProfileCard;
