import { ImageIcon } from "lucide-react"
import { Button } from "../button"
import { useRef } from "react";
import { cn } from "@/lib/utils";

const ACCEPTED_FILE_TYPES = {
    image: "image/*",
    document: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ],
}
export default function DropzoneFile({ type = "image", invalid }: { type?: "image" | "document", invalid?: boolean }) {
    const inputRef = useRef<HTMLInputElement>(null);
    return <div
        aria-invalid={invalid}
        className={cn("border-dashed border-2 border-gray-200 bg-gray-100 rounded-md p-4 hover:bg-gray-100/75 cursor-pointer",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        )}
        onClick={() => inputRef.current?.click()}>
        <EmptyState />
        <input type="file" className="hidden" ref={inputRef} accept={typeof ACCEPTED_FILE_TYPES[type] === "string" ? ACCEPTED_FILE_TYPES[type] : ACCEPTED_FILE_TYPES[type].join(",")} />
    </div>
}

function EmptyState({ type = "image" }: { type?: "image" | "document" }) {
    return <div className="flex flex-col items-center justify-center h-[200px]">
        {type === "image" &&
            <>
                <ImageIcon className="w-10 h-10 text-gray-500" />
                <p className="text-sm text-gray-500">Drag and drop your file here or click to upload</p>
                <Button type="button" variant="ghost" className="text-blue-500">Upload Image</Button>
            </>
        }
    </div>
}