import { types } from "mobx-state-tree";

const recipes = types.model("Recipes", {
  id: types.maybeNull(types.number),
  name: types.maybeNull(types.string),
  details: types.maybeNull(types.string),
  time: types.maybeNull(types.number),
  type: types.maybeNull(types.string),
  rating: types.maybeNull(types.number)
});

export default recipes;
