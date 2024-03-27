export async function getRandomRecipes() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_RECIPE_API
    }&number=24&limitLicense=false`
  );

  if (!res.ok)
    throw new Error("An error occured during fetching random recipes");

  return res.json();
}
