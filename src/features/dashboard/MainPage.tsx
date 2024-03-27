import EmptyPage from "../../ui/EmptyPage";
import Loading from "../../ui/Loading";
import RecipeItem, { RecipeProps } from "../../ui/RecipeItem";
import { useRandomRecipe } from "./useRandomRecipe";
import GridContainer from "../../ui/GridContainer";

export default function MainPage() {
  const { randomRecipes, isLoading, error } = useRandomRecipe();
  console.log(randomRecipes);
  if (isLoading) return <Loading />;
  if (error || randomRecipes.recipes.length < 1) return <EmptyPage />;

  return (
    <GridContainer>
      {randomRecipes.recipes.map((recipe: RecipeProps["recipe"]) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </GridContainer>
  );
}
