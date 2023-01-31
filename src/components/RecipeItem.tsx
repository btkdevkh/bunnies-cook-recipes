import Image from "next/image"
import Link from "next/link"

type RecipeItemProps = {
  recipe: any
}

export default function RecipeItem({ recipe }: RecipeItemProps) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields

  return (
    <div className="recipe-item">
      <div className="thumbnail">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={slug}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          priority
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Temps de cuission environ {cookingTime} min</p>
        </div>
        <div className="actions">
          <Link href={`/recipes/${slug}`}>Cuisiner</Link>
        </div>
      </div>
    </div>
  )
}
