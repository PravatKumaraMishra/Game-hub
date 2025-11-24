import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (value: string) => void;
  sortOrder: string;
}
export const sortingPerameters = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Released date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

export default function SortSelecter({ onSelectSortOrder, sortOrder }: Props) {
  const currentSortOrder = sortingPerameters.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingPerameters.map((perameter) => (
          <MenuItem
            onClick={() => onSelectSortOrder(perameter.value)}
            key={perameter.value}
            value={perameter.value}
          >
            {perameter.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
