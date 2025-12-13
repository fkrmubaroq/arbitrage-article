"use client";

import { Check, ChevronDownIcon, ChevronsUpDown, X, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const title = "Multiple Items with Badges";

const tags = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "solid", label: "Solid" },
];
export type MultipleSelectorOption = {
    value: string;
    label: string;
};
const MultipleSelector = ({ options, onSelect, values, onRemoveItem, placeholder, emptyIndicator }: {
    options: MultipleSelectorOption[],
    onSelect: (option: MultipleSelectorOption) => void,
    values: string[],
    onRemoveItem: (option: MultipleSelectorOption) => void,
    placeholder?: string,
    emptyIndicator?: React.ReactNode | string,
    className?: string
}) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <Popover onOpenChange={setOpen} open={open}>
            <PopoverTrigger asChild>
                <Button
                    aria-expanded={open}
                    ref={buttonRef}
                    className="w-full justify-between h-auto! bg-input/30!"
                    role="combobox"
                    variant="outline"
                >
                    <div className="flex flex-wrap gap-1">
                        {values.length > 0 ? (
                            values.map((value) => (
                                <Badge className="mr-1" key={value} variant="default">
                                    {options.find((option) => option.value === value)?.label}
                                    <button
                                        className="ml-1 rounded-full  hover:opacity-80 outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                        onClick={(e) => {

                                            e.stopPropagation();
                                            onRemoveItem(options.find((option) => option.value === value)!)
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                onRemoveItem(options.find((option) => option.value === value)!)
                                            }
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                    >
                                        <XIcon size={10} color="white" className="w-[13px]! h-[13px]! text-muted-foreground hover:text-foreground" />
                                    </button>
                                </Badge>
                            ))
                        ) : (
                            <span className="text-muted-foreground">{placeholder}</span>
                        )}
                    </div>
                    <ChevronDownIcon className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>{emptyIndicator}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    onSelect={(currentValue) => {
                                        onSelect(option);
                                    }}
                                    value={option.value}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 size-4",
                                            values?.includes(option.value)
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default MultipleSelector;
