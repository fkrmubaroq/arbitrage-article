import { ImageIcon } from "lucide-react"
import { Button } from "../button"
import { useRef, useState } from "react";
import { cn, formatFileSize } from "@/lib/utils";
import Image from "next/image";

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
export default function DropzoneFile({ type = "image", multiple = false, invalid, onChange }: { type?: "image" | "document", multiple?: boolean, invalid?: boolean, onChange?: (files: File[]) => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[] | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {

            const files = e.target.files;
            if (!files?.length) return;
            setFiles(files.length === 1 ? [files[0]] : [...files]);
            onChange?.(Array.from(files));
        } catch (e) {

        } finally {
            e.target.value = "";
        }
    }
    return <div
        aria-invalid={invalid}
        className={cn("border-dashed border-2 border-gray-200 bg-gray-100 rounded-md p-4 hover:bg-gray-100/75 cursor-pointer",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        )}
        onClick={() => inputRef.current?.click()}>
        {
            files ?
                <div className="grid grid-cols-2 gap-2 flex-wrap">
                    {files.map((f) => (
                        <div key={f.name} className="flex items-center bg-white flex-col gap-2 justify-center border rounded-md p-2">
                            <Image src={URL.createObjectURL(f)} alt={f.name} width={100} height={100} />
                            <span className="text-sm text-gray-500 line-clamp-2 break-all">{f.name}</span>
                            <span className="text-sm text-gray-500">{formatFileSize(f.size)}</span>
                        </div>
                    ))}
                </div> :
                <EmptyState />
        }
        <input
            type="file"
            className="hidden"
            ref={inputRef}
            multiple={multiple}
            accept={typeof ACCEPTED_FILE_TYPES[type] === "string" ? ACCEPTED_FILE_TYPES[type] : ACCEPTED_FILE_TYPES[type].join(",")}
            onChange={handleChange}
        />
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