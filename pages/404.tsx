import { Container, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

const Custom404: NextPage = () => {
  return (
    <Layout title="Error 404">
      <Container display="flex" justify="center" alignItems="center"
        css={{
          height: "calc(100vh - 100px)",
          width: "100%"
        }}>
        <Text h1
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
        >
          404 - Page Not Found</Text>
      </Container>
    </Layout>
  )
}


export default Custom404;
