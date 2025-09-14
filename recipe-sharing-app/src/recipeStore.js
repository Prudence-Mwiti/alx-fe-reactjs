import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter(r => r.id !== id) })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId]
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter(
        r => state.favorites.includes(r.id) && Math.random() > 0.5
      )
    }))
}));




