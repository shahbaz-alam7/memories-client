import React from "react";
import useStyles from "./style";
import { useSelector } from "react-redux";
import Post from "./post/Post";
import { Grid, CircularProgress } from "@material-ui/core";
const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  if(!posts.length && !isLoading) return "No posts..."
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => {
        return (
          <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
