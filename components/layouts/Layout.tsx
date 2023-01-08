import { FC } from "react"
import Head from "next/head"
import { NavBar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
  current?: string;
}

export const Layout: FC<Props> = ({ children, title, current }) => {
  return (
    <div>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Kevin Illu" />
        <meta name="description" content={`Informacion sobre el pokemon ${current || "Pikachu"}`}/>
        <meta name="keywords" content={` ${title}, ${current || "Pikachu"}, pokemon, pokedex, next projects`}/>
      </Head>

      <NavBar />

      <main>
        {children}
      </main>
    </div>
  )
}
