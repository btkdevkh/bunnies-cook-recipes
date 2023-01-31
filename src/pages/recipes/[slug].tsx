import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "@/components/Skeleton"

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "recipe" })

  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context: any) => {
  const res = await client.getEntries({
    content_type: "recipe",
    "fields.slug": context.params.slug,
  })

  if (!res.items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      recipe: res.items[0],
      revalidate: 1,
    },
  }
}

export default function RecipeDetails({ recipe }: any) {
  if (!recipe) {
    return (
      <div className="container">
        <Skeleton />
      </div>
    )
  }

  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields

  return (
    <div className="recipe-details">
      <div className="banner">
        <div className="container">
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            alt={title}
            priority
          />
          <h2>{title}</h2>
          <div className="desc">
            <p>Temps de cuission {cookingTime} min</p>
            <h3>Ingrédients:</h3>

            <div className="infredients">
              {ingredients.map((ing: any) => (
                <span key={ing}>{ing}</span>
              ))}
            </div>
          </div>

          <div className="method">
            <h3>Méthode:</h3>
            <div>{documentToReactComponents(method)}</div>
          </div>

          <div className="back">
            <Link href={"/"}>Retour</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
