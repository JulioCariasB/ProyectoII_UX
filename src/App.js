import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  appBar: {
    position: 'relative',
  }
});


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };
  
  render() {
    return (
      <div className="App">
        <AppBar position="static" className={this.props.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              POKEDEX
            </Typography>
          </Toolbar>
        </AppBar>
        <Login/>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
