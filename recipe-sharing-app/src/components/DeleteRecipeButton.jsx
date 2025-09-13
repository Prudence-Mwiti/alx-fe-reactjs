import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <button
      onClick={() => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
          deleteRecipe(recipeId);
        }
      }}
      style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
