"use client"
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
import { cn } from "@/lib/utils"
import { AlignJustifyIcon, Check, ChevronUpIcon, Heading1Icon, Heading2Icon, Heading3Icon, ListIcon, ListOrderedIcon } from "lucide-react"
import * as React from "react"

const frameworks = [
    {
        value: "Normal",
        label: <BlockItem icon={<AlignJustifyIcon />} label="Normal" />,
    },
    {
        value: "Heading 1",
        label: <BlockItem icon={<Heading1Icon />} label="Heading 1" />,
    },
    {
        value: "Heading 2",
        label: <BlockItem icon={<Heading2Icon />} label="Heading 2" />,
    },
    {
        value: "Heading 3",
        label: <BlockItem icon={<Heading3Icon />} label="Heading 3" />,
    },
    {
        value: "Numbered List",
        label: <BlockItem icon={<ListOrderedIcon />} label="Numbered List" />,
    },
    {
        value: "Bulleted List",
        label: <BlockItem icon={<ListIcon />} label="Bulleted List" />,
    },
]

export default function BlockFormatDropdown() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between border-none shadow-none rounded-sm"
            >
                {value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Select framework..."}
                <ChevronUpIcon
                    className={cn("opacity-50 transition-transform duration-200", {
                        "rotate-180": open
                    })}
                />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
            <Command>
                <CommandInput placeholder="Search framework..." className="h-9" />
                <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                {framework.label}
                                <Check
                                    className={cn(
                                        "ml-auto",
                                        value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
}

function BlockItem({ icon, label }: { icon: React.ReactNode, label: string }) {
    return <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
    </div>
}
