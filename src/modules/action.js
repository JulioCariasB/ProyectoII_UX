// types of action
const Types = {
    ADD_POKEMON: "ADD_POKEMON",
    DELETE_ITEM: "DELETE_ITEM",
    OPEN_DIALOG: "OPEN_DIALOG",
    CLOSE_DIALOG: "CLOSE_DIALOG",
    CHECK_USER: "CHECK_USER"
  };
  // actions
  const addPokemon = task => ({
    type: Types.ADD_POKEMON,
    payload: task
  });
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  const openDialog = () => ({
    type: Types.OPEN_DIALOG,
  });
  const closeDialog = () => ({
    type: Types.CLOSE_DIALOG,
  });
  const checkUser = data => ({
    type: Types.CHECK_USER,
    payload: data
  });
  export default {
    addPokemon,
    deleteItem,
    openDialog,
    closeDialog,
    checkUser,
    Types
  };