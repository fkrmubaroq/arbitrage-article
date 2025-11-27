import clsx from "clsx";
import { EllipsisVerticalIcon } from "lucide-react";

export default function ButtonDotsVertical({ className, ...props }: React.ComponentProps<"button">) {
    return <div
        className={clsx("flex mx-auto cursor-pointer justify-center items-center size-6 hover:bg-gray-200 rounded-sm", className)}
        {...props}
    >
        <EllipsisVerticalIcon size={14} color="#333" />
    </div>
}