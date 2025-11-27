"use client"

import { CheckIcon, ChevronsUpDownIcon, LoaderCircleIcon } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { waitForElement } from "@/lib/utils"
import clsx from "clsx"

export default function Combobox({
  placeholder,
  options,
  value,
  isLoading,
  onSelect,
  initialValue
}: UICombobox.ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [currentValue, setCurrentValue] = React.useState(value)
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!buttonRef.current) return;
    if (!open) return;
    waitForElement(".command-wrapper").then(el => {
      const buttonWidth = buttonRef.current?.clientWidth || 0;
      el.style.width = `${buttonWidth}px`
    })
  }, [open])

  // Sync propValue ke local state
  React.useEffect(() => {
    if (!initialValue) return;

    setCurrentValue(initialValue);

  }, [initialValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={buttonRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx("justify-between w-full", {
            "text-gray-400 hover:text-gray-400": !currentValue
          })}
        >
          {currentValue
            ? options.find((item) => item.value === currentValue)?.label
            : placeholder}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command className="command-wrapper">
          <CommandInput placeholder="Search..." />
          {isLoading ? <PlaceholderLoading /> :
            <CommandList>
              <CommandEmpty>No data found.</CommandEmpty>
              <CommandGroup>
                {options.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setCurrentValue(currentValue === value ? "" : currentValue)
                      setOpen(false);
                      onSelect(currentValue)
                    }}
                  >
                    <CheckIcon
                      className={clsx(
                        "mr-2 h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          }
        </Command>
      </PopoverContent>
    </Popover>
  );
}


function PlaceholderLoading() {
  return (
    <div className="min-h-[200px] flex flex-col gap-y-1.5 justify-center items-center">
      <LoaderCircleIcon className="animate-spin" color="gray" size={14} />
      <span className="text-gray-400 text-sm">Searching...</span>
    </div>
  );
}