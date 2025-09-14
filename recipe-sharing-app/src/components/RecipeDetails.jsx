// src/components/RecipeDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div style={{ padding: '20px' }}>
      {!isEditing ? (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
          <DeleteRecipeButton id={recipe.id} />
          <button onClick={() => navigate('/')}>Back to Recipes</button>
        </>
      ) : (
        <EditRecipeForm recipe={recipe} />
      )}
    </div>
  );
};

export default RecipeDetails;


