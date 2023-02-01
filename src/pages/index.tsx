import RecipeList from "@/components/RecipeList"
import { createClient } from "contentful"

export const getStaticProps = async () => {
  if (
    !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
    !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  ) {
    return {
      props: { recipes: [] },
    }
  }

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  })

  const res = await client.getEntries({ content_type: "recipe" })

  return {
    props: { recipes: res.items },
    revalidate: 1,
  }
}

export default function Home({ recipes }: any) {
  return (
    <main className="container">
      {!recipes.length && (
        <div className="no-recipe-found">
          <h2>Aucune recette trouvée</h2>
        </div>
      )}
      <RecipeList recipes={recipes} />
    </main>
  )
}
