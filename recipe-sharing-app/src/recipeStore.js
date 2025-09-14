import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // trigger filtering when search term changes
  },
  filteredRecipes: [],
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((r) => r.id !== id),
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    ),
  })),
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));



