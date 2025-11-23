import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

export default function GameCardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box width="200px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}
