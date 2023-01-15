import Image from "next/image";
import NextLink from "next/link";
import { Navbar, Text, Link } from "@nextui-org/react";

export const NavBar = () => {
  return (
    <Navbar isBordered variant={"floating"}>
      <Navbar.Brand>
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          }
          alt={"BrandIcon"}
          width={60}
          height={60}
        />
        <NextLink href={"/"}>
          <Text
            h1
            size={20}
            weight="bold"
            css={{
              margin: 0,
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
          >
            Pokedex
          </Text>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <NextLink href={"/favorites"} passHref>
            Favorites
          </NextLink>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
