import { Separator } from "@/components/ui/separator"
import BlockFormatDropdown from "./block-format-dropdown"
import BlockFormatTextColor from "./block-format-text"

export default function ToolbarPlugin() {
    return <div className="flex items-center gap-2 bg-white rounded-t-md shadow border-t border-l border-r shadow-b  border-input p-1">
        <BlockFormatDropdown />
        <Separator orientation="vertical" className="h-8" />
        <BlockFormatTextColor />
    </div>
}

