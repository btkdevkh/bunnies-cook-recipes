import { IRecipe } from "@/types/IRecipe"
import RecipeItem from "./RecipeItem"

type RecipeListProps = {
  recipes: IRecipe[]
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe: any) => (
        <RecipeItem key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  )
}
