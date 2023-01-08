import { Grid } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next"
import { pokeApi } from "../api"
import { Layout } from "../components/layouts"
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces"

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title="All Pokemons">
      <Grid.Container gap={2} justify="flex-start" css={{
        margin: "0 auto",
        width: "90%"
      }}>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data: {results} } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = results.map((pokemon, i) => {
    const numberOfPokemon = i + 1
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numberOfPokemon}.svg`

    return {
      id: i + 1,
      name: pokemon.name,
      url: pokemon.url,
      img,
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default Home;
