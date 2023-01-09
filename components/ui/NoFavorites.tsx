import { Container, Grid, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container lg css={{
      height: "calc(100vh - 100px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center"
    }}>
      <Grid.Container gap={2} justify={"center"} alignItems={"center"}>
        <Text h1 color="error">No Favorites UnU</Text>
      </Grid.Container>
    </Container>
  )
}
