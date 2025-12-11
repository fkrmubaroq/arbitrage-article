import { Button } from "@/components/ui/button";
import { BoldIcon, ItalicIcon, LinkIcon, UnderlineIcon } from "lucide-react";

export default function BlockBoldItalicUnderline() {
    return <div className="flex items-center gap-x-0.5">
        <Button variant="ghost" size="icon">
            <BoldIcon />
        </Button>
        <Button variant="ghost" size="icon">
            <ItalicIcon />
        </Button>
        <Button variant="ghost" size="icon">
            <UnderlineIcon className="size-5 shrink-0"/>
        </Button>
        <Button variant="ghost" size="icon">
            <LinkIcon />
        </Button>
    </div>
}