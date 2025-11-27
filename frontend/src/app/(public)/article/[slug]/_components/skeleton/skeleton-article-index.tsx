import { Skeleton } from "@/components/ui/skeleton";


export default function SkeletonArticleIndex() {
    return <>
        <div className="relative h-[calc(50vh+72px)] md:h-[calc(60vh+72px)] overflow-hidden">
            <Skeleton className="w-full h-full" />
        </div>
        <div className="container max-w-3xl py-10">
            <SkeletonArticleHeader />
            <SkeletonArticleContent />
        </div>
    </>
}

function SkeletonArticleHeader() {
    return <div className="h-[206px] max-w-3xl -mt-16 bg-white dark:bg-black relative border rounded-lg p-6 md:p-8 shadow-md">
        <div className="flex flex-col gap-y-2">
            <Skeleton className="w-full h-[35px]" />
            <Skeleton className="w-1/2 h-[35px]" />
        </div>
        <div className="flex md:items-center justify-between mt-6 md:flex-row flex-col md:gap-y-3 gap-y-0">
            <div className="flex items-center gap-4">
                <Skeleton className="size-10 rounded-full " />
                <div className="flex gap-3 flex-col">
                    <Skeleton className="w-36 h-3" />
                    <Skeleton className="w-44 h-3" />
                </div>
            </div>

            <div className="flex items-center gap-2 justify-center">
                <Skeleton className="size-10 rounded-md" />
                <Skeleton className="size-10 rounded-md" />
            </div>
        </div>
    </div>
}

function SkeletonArticleContent() {
    return <article className="mt-5 border p-5 dark:bg-black relative rounded-lg">
        <div className="flex flex-col gap-y-5">
            {Array(10).fill(1).map((_, key) =>
                <div className="flex flex-col gap-y-2" key={key}>
                    <Skeleton className="w-48 h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                </div>
            )
            }
        </div>
    </article>
}