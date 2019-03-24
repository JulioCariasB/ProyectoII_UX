import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import AddPokemon from './AddPokemon';


const mapStateToProps = state => ({
    pokemons: state.pokemons,
    open: state.openDialog
  });

const mapDispatchToProps = dispatch => ({
  addPokemon: item => dispatch(ACTIONS.addPokemon(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
  openDialog: () => dispatch(ACTIONS.openDialog())
});

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height:0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class PokemonList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         searchStr: "",
         pokemonsFilter: this.props.pokemons,
         usiFilter :false
      };

      this.handleAdd = this.handleAdd.bind(this);
    };

    handleAdd = event => {
        // this.props.addPokemon(this.state.item);
        this.props.openDialog();
      };
    
    render() {
      let pokemonsUse = this.state.usiFilter?this.state.pokemonsFilter:this.props.pokemons
        return (
            <React.Fragment>
                <AppBar position="static">
                  <Toolbar>
                  <Link to="/">
        
                    <Button>
                    <Typography variant="h6" color="inherit" noWrap>
                      Logout
                    </Typography>
                    </Button>
                  </Link>
                  </Toolbar>
                </AppBar>
              <div>
                <div className={this.props.heroUnit}>
                  <div className={this.props.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      PokemonList
                    </Typography>
                    <div className={this.props.heroButtons}>
                      <Grid container spacing={16} justify="center">
                        <Grid item>
                          <Button onClick={() => this.handleAdd()} variant="contained" color="primary">
                            Add Pokemon
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                    <div >
                    <div>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      value={this.state.searchStr}
                      onChange={(text) => {
                        this.setState({searchStr: text.target.value});
                        if(text.target.value.length > 0)
                        {
                          let dataNew = this.props.pokemons.filter(pok => {
                            console.log(pok);
                            return pok.name.startsWith(text.target.value)
                          });  
                          this.setState({usiFilter:true, pokemonsFilter: dataNew});
                        }
                        else
                        {
                          this.setState({usiFilter:false});
                        }
                      }}
                    />
                  </div>
                  </div>
                </div>
                <div className={classNames(this.props.layout, this.props.cardGrid)}>
                  <Grid container spacing={40}>
                    {
                      pokemonsUse.map((pokemon,i) => (
                      <Grid item key={i} sm={6} md={4} lg={3}>
                        <Card className={this.props.card}>
                          <CardMedia
                            style={{height:0,
                                  paddingTop: '56.25%'}}
                                image={pokemon.image}
                            title="Image title"
                          />
                          <CardContent className={this.props.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                              {pokemon.name}
                            </Typography>
                            <Typography>
                              Types: 
                            </Typography>
                            <ul>
                                {pokemon.tipos.map( (str,i) => 
                                    <li key={i}>
                                        <Typography>
                                            {str}
                                        </Typography>
                                    </li>
                                    
                                
                                )}
                            </ul>
                            <Typography>
                                Catch Rate: {pokemon.catchRate}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>

              <AddPokemon />
            </React.Fragment>
          );
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(PokemonList));