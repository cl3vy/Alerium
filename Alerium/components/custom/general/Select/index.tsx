// React Peer Dependencies
import React, { CSSProperties } from "react";
// Shad CN Components
import {
  Select as ShadCNSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Types And Interfaces
type SelectItemProps = {
  value?: string;
  description: string;
  disabled?: boolean;
};
type SelectProps = {
  selectorClassNames?: string;
  selectorPlaceholder?: string;
  defaultValue?: string;
  selectLabel?: string;
  items: SelectItemProps[];
  selectorStyles?: CSSProperties;
  onValueChange?: (value: string) => void;
};

function Select({
  selectorClassNames,
  selectorStyles,
  selectorPlaceholder,
  selectLabel,
  defaultValue,
  items,
  onValueChange,
}: SelectProps) {
  return (
    <ShadCNSelect
      defaultValue={defaultValue}
      key={defaultValue}
      onValueChange={onValueChange}
    >
      <SelectTrigger className={selectorClassNames} style={selectorStyles}>
        <SelectValue placeholder={selectorPlaceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectLabel && <SelectLabel>{selectLabel}</SelectLabel>}
          {items.map(({ value, description, disabled }, i) => (
            <SelectItem
              key={i}
              value={value ?? description}
              disabled={disabled}
            >
              {description}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShadCNSelect>
  );
}

export default Select;
export type { SelectProps, SelectItemProps };
