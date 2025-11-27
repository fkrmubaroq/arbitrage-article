import { Skeleton } from "../ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type TableRowsSkeletonProps = { totalRows: number; totalColumn: number };
export function TableRowsSkeleton({ totalRows, totalColumn }: TableRowsSkeletonProps) {
    return Array(totalRows).fill(1).map((_, key) => {
        return <TableRow key={key}>
            <TableCell colSpan={totalColumn} key={key}>
                <Skeleton className="h-9 w-full" />
            </TableCell>
        </TableRow>
    })

}

export function DataTableSkeleton({ columnsName, totalRows, totalColumn }: TableRowsSkeletonProps & { columnsName: string[] }) {
    return <>
        <div className="relative flex-1 mb-3">
            <Skeleton className="h-9 w-56" />
        </div>
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columnsName.map((item, key) => <TableHead key={key}>{item}</TableHead>)}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRowsSkeleton totalColumn={totalColumn} totalRows={totalRows} />
                </TableBody>
            </Table>
        </div>
    </>
}