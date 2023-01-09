import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui/";
import { localFavorites } from "../../utils";
import { Container } from "@nextui-org/react";
import FavoritePokemons from "../../components/pokemon/FavoritePokemons";


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number []>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorite - Pokemons">
      {
      favoritePokemons.length === 0 
        ? (<NoFavorites/>)
        : (
          <Container lg>
              <FavoritePokemons pokemons={favoritePokemons}/>
          </Container>
        )
    }
    </Layout>
  )
}

export default FavoritesPage;
