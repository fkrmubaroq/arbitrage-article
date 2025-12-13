import { cn } from "@/lib/utils"

export default function SlotHeaderItem({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={cn("fixed top-4 z-50", className)}>
        {children}
    </div>
}