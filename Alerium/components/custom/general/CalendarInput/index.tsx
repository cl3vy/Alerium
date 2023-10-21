"use client";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { date } from "zod";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react";
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
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
        </Button>
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
