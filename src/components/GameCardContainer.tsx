import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function GameCardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}
