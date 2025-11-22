import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card height="350px" borderRadius={10} overflow="hidden">
      <Image src={game.image} />
      <CardBody>
        <Heading fontSize="1xl">{game.name}</Heading>
        <Text>{game.short_description}</Text>
      </CardBody>
    </Card>
  );
}
