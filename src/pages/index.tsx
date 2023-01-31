import RecipeList from "@/components/RecipeList"
import { createClient } from "contentful"

export default function Home({ recipes }: any) {
  return (
    <main className="container">
      <RecipeList recipes={recipes} />
    </main>
  )
}

export const getStaticProps = async () => {
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
