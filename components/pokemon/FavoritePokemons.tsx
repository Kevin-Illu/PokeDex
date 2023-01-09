import { FC } from "react";

import { Container, Grid } from "@nextui-org/react"
import FavoritePokemonCard from "./FavoritePokemonCard";

interface Props {
  pokemons: number[],
}


const FavoritePokemons: FC<Props> = ({ pokemons }) => {

  return (
    <Container lg>
      <Grid.Container gap={2}>
        {
          pokemons.map(id => (
            <FavoritePokemonCard key={id} id={id} />
          ))
        }
      </Grid.Container>

    </Container>
  )
}

export default FavoritePokemons;
