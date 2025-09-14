import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map(recipe => {
          const isFav = favorites.includes(recipe.id);
          return (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => (isFav ? removeFavorite(recipe.id) : addFavorite(recipe.id))}>
                {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;



