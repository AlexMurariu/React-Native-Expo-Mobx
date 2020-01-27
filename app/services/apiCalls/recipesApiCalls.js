export default function getRecipesApiCalls(api) {
  return {
    getAllRecipes: () => api.get("/low")
  };
}
export const callNames = {
  GET_ALL: "getAllRecipes"
};
