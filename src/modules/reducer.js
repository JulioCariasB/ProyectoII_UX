import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  pokemons: [{name: 'Bulbasur', image: "http://pm1.narvii.com/5781/b0f726ad66be5bd417fe3ad5a85820e6d98dd0b5_00.jpg" , tipos: ['Fighting','Ground'], catchRate : '45%'},
  {name: 'Charizard',image: "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png", tipos: ['Fighting','Ground'], catchRate : '45%'},
  {name: 'Charmander',image: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png", tipos: ['Fighting','Ground'], catchRate : '55%'},
  {name: 'Pikachu',image: "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png", tipos: ['Fighting','Ground'], catchRate : '25%'},
  {name: 'Snorlax',image: "https://pokemongo.gamepress.gg/sites/pokemongo/files/styles/240w/public/2018-01/pokemon_icon_143_00.png?itok=YQB_Eonm", tipos: ['Fighting','Ground'], catchRate : '35%'},
],
    openDialog: false,
    user: [{userName: "Ash Ketchum", userEmail:
        "ash@pokemon.com", password: "pokedex"}, {userName: "Misty", userEmail:
        "misty@pokemon.com", password: "paleta"}]
};
const pokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.ADD_POKEMON: {
      console.log(action);
      let data = action.payload;
      let newItem = {name: data.name,image: data.urlImage, tipos: [data.type1,data.type2], catchRate : data.catchRate};
      let newState = _.cloneDeep(state);
      newState.pokemons.push(newItem);
      return newState;
    }
    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.pokemons.splice(index, 1);
      return newState;
    }
    case ACTIONS.Types.OPEN_DIALOG: {
        let newState = _.cloneDeep(state);
        newState.openDialog = true;
        return newState;
    }
    case ACTIONS.Types.CLOSE_DIALOG: {
        let newState = _.cloneDeep(state);
        newState.openDialog = false;
        return newState;
    }
    case ACTIONS.Types.CHECK_USER: {
        let data = action.payload
        let newState = _.cloneDeep(state);
        newState.user.forEach(val => {
            if(data.usr == val.userName)
            {
                if(data.psswd == val.password)
                {
                    return true;
                }
            }
        })
        return false;
    }
    default:
      return state;
  }
};
export default pokemonReducer;