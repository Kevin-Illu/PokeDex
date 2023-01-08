import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts"
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout>
      <h1>{pokemon.name}</h1>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const paths = [...Array(151)].map((__, index) => ({
    params: { id: `${index + 1}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    }
  }
}


export default PokemonPage;
