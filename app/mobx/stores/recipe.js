import { types, flow, getSnapshot } from "mobx-state-tree";
import { Recipes } from "../models";
import baseStore from "./base";
import { getEnv } from "mobx-state-tree";

// Here we will add call our api service for requests *just like sagas/thunks*
const recipesStore = types
  .model("Recipes", {
    isLoading: false,
    recipes: types.optional(types.array(Recipes), [])
  })
  .views(self => ({
    get getAllRecipes() {
      return getSnapshot(self.recipes);
    },
    get getIsLoading() {
      return self.isLoading;
    }
  }))
  .actions(self => ({
    setLoading: value => {
      self.isLoading = value;
    },

    setField: (field, value) => (self[field] = value),

    getAll: flow(function*() {
      self.setLoading(true);
      const recipesCalls = getEnv(self).callNames.recipesCallNames;
      yield self.fetch(
        recipesCalls.GET_ALL,
        {},
        self.onGetAllSuccess,
        self.onError
      );
    }),

    onGetAllSuccess: response => {
      console.log(response);
      self.setField("recipes", response.data);
      self.setLoading(false);
    },

    onError: error => {
      console.log(error);
      self.setField("error", error.originalError);
      self.setLoading(false);
    },

    onSuccess: response => {
      self.getAll();
    }
  }));

const enhancedRecipes = types.compose(recipesStore, baseStore);
export default enhancedRecipes;
