import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

export default function PaginationTable({ page, onPrev, onNext }: { page: number; onPrev: (page:string) => void; onNext: (page:string) => void }) {
  return (
    <Pagination className="flex justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => onPrev(-1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => onNext(1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
