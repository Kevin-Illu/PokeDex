import { Button, Card, Grid, Row, Text, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const { id, name, img } = pokemon;
  const { theme } = useTheme();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  }

  return (
    <Grid xs={6} sm={3}>
      <Card 
        isPressable 
        onClick={handleClick}
        css={{
          height: 280,
        }}
      >
        <Card.Body css={{
          backgroundColor: theme?.colors.accents4.value,
        }}>
          <Card.Image
            src={img}
            alt={name}
            />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            justifyItems: "flex-start",
            padding: "1.5rem .8rem"
          }}
        >
          <Row wrap="wrap" justify="space-between" align="center">
            <Text>
              {id} - {name}
            </Text>
            <Button color={"secondary"} auto>
              Add to Favorites
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
