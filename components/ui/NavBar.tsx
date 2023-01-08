import { Button, Navbar, Text } from "@nextui-org/react";
import Image from "next/image";

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
        <Text b color="inherit" hideIn="xs">
          POKEDEX
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Button flat auto color={"secondary"}>
            Favoritos
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
