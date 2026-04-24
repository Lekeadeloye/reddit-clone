import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSortByValue } from "@/redux/selectors/uiSelectors";
import { setSortBy } from "@/features/ui/uiSlice";
interface SortComboBoxProps {
  options?: Option[];
  value?: string;
  onChange?: (value: string) => void;
}

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  {
    value: "Best",
    label: "Best",
  },
  {
    value: "Hot",
    label: "Hot",
  },
  {
    value: "New",
    label: "New",
  },
  {
    value: "Top",
    label: "Top",
  },
];
const SortComboBox = () => {
  const [isSortByMenuOpen, setIsSortByMenuOpen] = useState(false);
  const sortByValue = useAppSelector(selectSortByValue)
  const displayLabel = sortByValue === 'all' ? 'Best' : sortByValue
  const dispatch = useAppDispatch()

  const handleOnSelect = (currentValue: string) => {
    dispatch(setSortBy(currentValue));
    setIsSortByMenuOpen(false);
  };

  return (
    <>
      <Popover open={isSortByMenuOpen} onOpenChange={setIsSortByMenuOpen}>
        <PopoverTrigger asChild>
          <Button
            className="border-none"
            variant="outline"
            role="combobox"
            aria-expanded={isSortByMenuOpen}
          >
            {displayLabel} <ChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command defaultValue={sortByValue}>
            <CommandList>
              <CommandGroup heading="Sort By">
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={handleOnSelect}
                    className={cn(
                      "cursor-pointer",
                      sortByValue === option.value &&
                        "bg-accent text-accent-foreground",
                    )}
                  >
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SortComboBox;
