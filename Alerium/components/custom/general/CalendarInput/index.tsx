"use client";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type CalendarInputProps = {
  onSelection?: (selectedDate: Date | undefined) => void;
  triggerClassName?: string;
  children: ReactNode;
};

function CalendarInput({ onSelection, triggerClassName, children }: CalendarInputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className={triggerClassName}>{children}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(date) => {
            setSelectedDate(date);
            onSelection && onSelection(date);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export default CalendarInput;
export type { CalendarInputProps };
