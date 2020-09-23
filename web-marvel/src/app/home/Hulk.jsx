import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/desert.png';
import CardHeroi from './CardHero';

const styles = {
  paperContainer: {
    backgroundPosition: 'center',
    backgroundRepeat: ' no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    backgroundImage: `url(${Image})`
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center'
  }
}));
const herois = [
  { nome: 'hulk', avatar: "https://static.comicvine.com/uploads/original/11135/111351056/6539825-maxresdefault%20%287%29.jpg" },
  { nome: 'aranha', avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRES9rAIFWiAHOp7T56n3s5_oHJX8JPTfyKsA&usqp=CAU" },
  { nome: 'thanos', avatar: "https://avatarfiles.alphacoders.com/823/82342.jpg" }]

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <Paper style={styles.paperContainer}>
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>
            {herois.map(element => {
              return <CardHeroi avatar={element.avatar} />
            })}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardHeroi />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardHeroi />
        </Grid>
      </Grid>
    </Paper>
  )
}