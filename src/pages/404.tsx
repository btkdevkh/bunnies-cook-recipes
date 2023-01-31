import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push("/"), 3000)
  }, [])

  return (
    <div className="container">
      <div className="not-found">
        <h2>404, Page non trouvée :(</h2>

        <br />
        <br />
        <div className="back">
          <Link href={"/"}>Retour</Link>
        </div>
      </div>
    </div>
  )
}
