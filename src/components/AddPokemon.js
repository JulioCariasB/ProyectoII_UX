import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

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
  closeDialog: () => dispatch(ACTIONS.closeDialog())
});

class addPokemon extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         nxState:0,
         pokemon: {name: "DAMASO",urlImage: "",type1: "",type2: "",height:"",
            weight:"",gender: "",catchRate: ""}
      };
    };
    
  confirmeDialog = () => {
      if(this.state.nxState == 0)
      {
          this.setState({nxState: 1});
      }
      if(this.state.nxState == 1)
      {
          this.setState({nxState: 2});
      }
      else if(this.state.nxState == 2)
      {
          this.props.addPokemon(this.state.pokemon)
          this.props.closeDialog();

      }
  };
  handleClose = () => {
    this.props.closeDialog();
    this.setState({nxState: 0});
};

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Pokemon</DialogTitle>
            {this.state.nxState == 0?
                <DialogContent>
            <TextField
              autoFocus
              onChange={(text) => {
                  let dataNew = this.state.pokemon;
                  dataNew.name = text.target.value;
                  this.setState({
                    pokemon: dataNew
                  });
                }}
              margin="dense"
              id="name"
              label="Name"
              type="email"
              value={this.state.pokemon.name}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="LinkImagen"
              value={this.state.pokemon.urlImage}
              onChange={(text) => {
                  let dataNew = this.state.pokemon;
                  dataNew.urlImage = text.target.value;
                  this.setState({
                    pokemon: dataNew
                  });
                }}
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Tipo1"
              value={this.state.pokemon.type1}
              onChange={(text) => {
                  let dataNew = this.state.pokemon;
                  dataNew.type1 = text.target.value;
                  this.setState({
                    pokemon: dataNew
                  });
                }}
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Tipo2"
              value={this.state.pokemon.type2}
              onChange={(text) => {
                  let dataNew = this.state.pokemon;
                  dataNew.type2 = text.target.value;
                  this.setState({
                    pokemon: dataNew
                  });
                }}
              type="email"
              fullWidth
            />
          </DialogContent>
            :null
            }
            {this.state.nxState == 1?
                <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="height"
              value={this.state.pokemon.height}
              onChange={(text) => {
                  let dataNew = this.state.pokemon;
                  dataNew.height = text.target.value;
                  this.setState({
                    pokemon: dataNew
                  });
                }}
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="weight"
              value={this.state.pokemon.weight}
              onChange={(text) => {
                  let dataNew = this.state.pokemon;
                  dataNew.weight = text.target.value;
                  this.setState({
                    pokemon: dataNew
                  });
                }}
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="gender"
              value={this.state.pokemon.gender}
              onChange={(text) => {
                  let dataNew = this.state.pokemon;
                  dataNew.gender = text.target.value;
                  this.setState({
                    pokemon: dataNew
                  });
                }}
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="catchRate"
              value={this.state.pokemon.catchRate}
              onChange={(text) => {
                  let dataNew = this.state.pokemon;
                  dataNew.catchRate = text.target.value;
                  this.setState({
                    pokemon: dataNew
                  });
                }}
              type="text"
              fullWidth
            />
          </DialogContent>
            :null
            }
            {this.state.nxState == 2?
            <DialogContent>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Name:{this.state.pokemon.name}
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      URLIMG: {this.state.pokemon.urlImage}
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Weight: {this.state.pokemon.weight}
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Height: {this.state.pokemon.height}
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Type 1: {this.state.pokemon.type1}
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Type2: {this.state.pokemon.type2}
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Catch Rate: {this.state.pokemon.catchRate}
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Gender: {this.state.pokemon.gender}
            </Typography>
            </DialogContent>
            :null
            }
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.confirmeDialog} color="primary">
              {this.state.nxState == 2?"Add Pokemon":"Next"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(addPokemon);