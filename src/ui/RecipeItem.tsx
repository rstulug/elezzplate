import { Link } from "react-router-dom";
import { FaClock, FaSpoon } from "react-icons/fa6";

export interface RecipeProps {
  recipe: {
    image: string;
    id: number;
    readyInMinutes: number;
    title: string;
    servings: number;
  };
}

export default function RecipeItem({ recipe }: RecipeProps) {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="flex flex-col border border-sky-700 w-full rounded-xl h-full pb-2"
    >
      <img
        src={recipe.image || "/icon.jpg"}
        alt={recipe.title}
        className="rounded-t-xl w-full h-[10rem] object-cover"
      />
      <div className="flex flex-col gap-1 justify-between mt-2">
        <div className="text-center">{recipe.title}</div>
        <div className="flex flex-row gap-4 justify-center">
          {recipe.readyInMinutes && (
            <div className="flex flex-row items-center gap-1">
              <FaClock /> {recipe.readyInMinutes}
            </div>
          )}
          {recipe.servings && (
            <div className="flex flex-row gap-1 items-center">
              <FaSpoon /> {recipe.servings}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
