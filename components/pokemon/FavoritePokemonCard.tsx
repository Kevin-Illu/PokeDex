import { Grid, Card, Text, Image, Badge, Row, useTheme } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
  id: number
}

const FavoritePokemonCard: FC<Props> = ({ id }) => {

  const router = useRouter();
  const { theme } = useTheme();

  const onClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid key={id} xs={6} sm={3}>
      <Card
        isPressable
        onClick={onClick}
        css={{
          maxHeight: "fit-content",
          height: 250,
        }}
      >
        <Card.Body css={{
          backgroundColor: theme?.colors.accents4.value,
        }}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={"hola"}
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
            <Badge color="secondary">{id}</Badge>
            <Text></Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default FavoritePokemonCard;
