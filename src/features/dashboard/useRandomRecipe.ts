import { useQuery } from "@tanstack/react-query";
import { getRandomRecipes } from "../../services/recipe";

export function useRandomRecipe() {
  const {
    data: randomRecipes,
    isLoading,
    error,
  } = useQuery({ queryKey: ["recipes", "random"], queryFn: getRandomRecipes });

  return { randomRecipes, isLoading, error };
}
