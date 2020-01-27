import { types } from "mobx-state-tree";
import recipesStore from "./recipe";

export const stores = {
  recipes: types.optional(recipesStore, {})
};
