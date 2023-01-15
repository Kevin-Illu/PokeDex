import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Text, Card, Container, Image, Badge, Grid, Button } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { Pokemon } from "../../interfaces";
import { Layout } from "../../components/layouts"
import { Heart, People } from "react-iconly";
import { getPokemonInfo, localFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(localFavorites.existInFavorites(pokemon.id));
  const [isShared, setIsShared] = useState(false);

  const onShare = () => {
    const data = {
      title: `informacion sobre ${pokemon.name}`,
      text: `pagina sobre ${pokemon.name}`,
      url: `${window.location.pathname}`
    }

    if (navigator.canShare && navigator.canShare(data)) {
      navigator.share(data);
    } else {
      alert('no se puede compartir.');
    }

    setIsShared(prev => !prev);

    setTimeout(() => {
      setIsShared(false);
    }, 1000)
  }

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  };

  return (
    <Layout>
      <Container sm>
        <Card variant="flat" css={{ backgroundColor: "$black" }}>
          <Card.Header css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            wrap: "wrap"
          }}>
            <Grid.Container>
              <Grid.Container direction="row" alignItems="center" justify="space-between">
                <Text h1 transform="capitalize" css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}>{pokemon.name}</Text>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: ".8rem"
                }}>
                  <Button
                    auto
                    ghost={isFavorite}
                    color={isFavorite ? "gradient" : "default"}
                    onPress={onToggleFavorite}
                    icon={<Heart set="bold" primaryColor={isFavorite ? "white" : "black"} />}
                  >
                    {!isFavorite ? null : "en favoritos"}
                  </Button>
                  <Button
                    auto
                    onClick={onShare}
                    ghost={isShared}
                    color={isShared ? "success" : "primary"}
                    icon={<People set="bold" primaryColor={isShared ? "white" : "black"} />}
                  >share</Button>
                </div>
              </Grid.Container>
              <Grid.Container gap={1}>
                {pokemon.types.map((type, i) =>
                  <Grid key={i}>
                    <Badge color={"secondary"} size={"md"}>
                      <Text transform="uppercase" size={10} weight="bold">
                        {type.type.name}
                      </Text>
                    </Badge>
                  </Grid>
                )}
              </Grid.Container>
            </Grid.Container>
          </Card.Header>
          <Card.Body>
            <Card variant="bordered">
              <Container
                display="flex"
                justify="space-around"
                alignItems="center"
                css={{ padding: "1rem 0" }}>
                <Image
                  alt={pokemon.name}
                  width={300}
                  height={300}
                  src={
                    pokemon.sprites.other?.dream_world.front_default
                    || pokemon.sprites.other?.["official-artwork"].front_default
                    || pokemon.sprites.front_default
                  }
                />
              </Container>
            </Card>
            <Grid.Container justify="center" alignItems="center">
              <Text transform="capitalize" h2 css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}>Assets</Text>
            </Grid.Container>
            <Grid.Container gap={1} direction="row" justify="center" alignItems="center">
              <Grid>
                <Card isHoverable variant="bordered">
                  <Image
                    width={100}
                    height={100}
                    alt={pokemon.name}
                    src={pokemon.sprites.front_default}
                  />
                </Card>
              </Grid>
              <Grid>
                <Card isHoverable variant="bordered">
                  <Image
                    width={100}
                    height={100}
                    alt={pokemon.name}
                    src={pokemon.sprites.back_default}
                  />
                </Card>
              </Grid>
              <Grid>
                <Card isHoverable variant="bordered">
                  <Image
                    width={100}
                    height={100}
                    alt={pokemon.name}
                    src={pokemon.sprites.front_shiny}
                  />
                </Card>
              </Grid>
              <Grid>
                <Card isHoverable variant="bordered">
                  <Image
                    width={100}
                    height={100}
                    alt={pokemon.name}
                    src={pokemon.sprites.back_shiny}
                  />
                </Card>
              </Grid>
              {
                pokemon.sprites.other?.["official-artwork"].front_default && (
                  <Grid>
                    <Card isHoverable variant="bordered">
                      <Image
                        width={100}
                        height={100}
                        alt={pokemon.name}
                        src={pokemon.sprites.other?.["official-artwork"].front_default}
                      />
                    </Card>
                  </Grid>
                )
              }
            </Grid.Container>
          </Card.Body>
          <Card.Footer>
            <Container display="flex" justify="space-between" alignItems="center" wrap="wrap">
              <Badge size={"lg"}>hp: {pokemon.stats[0].base_stat}</Badge>
              <Badge size={"lg"}>atack: {pokemon.stats[1].base_stat}</Badge>
              <Badge size={"lg"}>defence: {pokemon.stats[2].base_stat}</Badge>
              <Badge size={"lg"}>Special Attack: {pokemon.stats[3].base_stat}</Badge>
              <Badge size={"lg"}>Special Defence: {pokemon.stats[4].base_stat}</Badge>
              <Badge size={"lg"}>speed: {pokemon.stats[5].base_stat}</Badge>
            </Container>
          </Card.Footer>
        </Card>
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const paths = [...Array(151)].map((__, index) => ({
    params: { id: `${index + 1}` }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id)

  if (!pokemon) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  }
}


export default PokemonPage;

