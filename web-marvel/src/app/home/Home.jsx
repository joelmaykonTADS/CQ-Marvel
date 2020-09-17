import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import BotaoProximo from './Btn';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Home() {
  const classes = useStyles()
  const [nome, setNome] = useState("Sem nome")

  const myChangeHandler = (event) => {
    alert(nome);
  }

  const handleChange = nome => {
    setNome(nome.target.value);
  };

  return (

    <form className={classes.root} noValidate autoComplete="off" onSubmit={myChangeHandler}>
      <Grid>
        <TextField
          id="filled-secondary"
          label="Nome"
          variant="outlined"
          color="secondary"
          value={nome}
          onChange={handleChange}
        />

        <TextField
          id="outlined-secondary"
          label="Tipo"
          variant="outlined"
          color="secondary"
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit">ok</Button>
        <BotaoProximo />
      </Grid>
    </form>
  );
}
