export interface IRecipe {
  id?: string | number
  title: string
  slug: string
  thumbnail: string
  featuredImage: string
  ingredients: string[]
  cookingTime: number
  method: string
}
