import { ReactNode } from "react"
import Footer from "./Footer"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="header">
        <h1>
          Bunnies
          <span>
            <i className="fa-solid fa-carrot"></i>Cook recipes
          </span>
        </h1>
      </header>

      {children}

      <Footer />
    </>
  )
}
