import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link, Redirect} from 'react-router-dom';

import ACTIONS from "../modules/action";
import { connect } from "react-redux";


const mapStateToProps = state => ({
    pokemons: state.pokemons,
    open: state.openDialog
  });

const mapDispatchToProps = dispatch => ({
  addPokemon: item => dispatch(ACTIONS.addPokemon(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
  openDialog: () => dispatch(ACTIONS.openDialog()),
  closeDialog: () => dispatch(ACTIONS.closeDialog()),
  checkUser: (data) => dispatch(ACTIONS.checkUser(data))
});

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       data: {usr: "Ash Ketchum", psswd: "pokedex"},
       users: [{userName: "Ash Ketchum", userEmail:
        "ash@pokemon.com", password: "pokedex"}, {userName: "Misty", userEmail:
        "misty@pokemon.com", password: "paleta"}],
        login: false
    };

    this.login = this.login.bind(this);
  };

  login(){
    this.state.users.forEach(val => {
      if(this.state.data.usr == val.userName)
      {
          if(this.state.data.psswd == val.password)
          {
              this.setState({login: true});
              return true;
          }
      }
  })
  return false;
  }
  

  render(){
    if(this.state.login){
      return <Redirect to="/pokemons" />
    }
    return (
      <div className={styles.main}>
        <Paper className={styles.paper}>
            LOGIN
          <form className={styles.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input value={this.state.data.usr}
                onChange={(text) => {
                  let dataNew = this.state.data;
                  dataNew.usr = text.target.value;
                  this.setState({
                    data: dataNew
                  });
                }}
               id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password"
                onChange={(text) => {
                  let dataNew = this.state.data;
                  dataNew.psswd = text.target.value;
                  this.setState({
                    data: dataNew
                  });
                }}
               value={this.state.data.psswd} type="password" id="password" autoComplete="current-password" />
            </FormControl>
            {/* <Link to="/pokemons"> */}
            <Button
            onClick={() => this.login()}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
            >
              Login
            </Button>
            
            {/* </Link> */}
          </form>
        </Paper>
      </div>
    );

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));