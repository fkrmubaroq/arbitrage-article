import { useQueryState } from "nuqs";
import { useState } from "react";
type UsePaginationOptions = {
  initialPage?: string;
  perPage?: number;
};

export function usePagination({
  initialPage = "1",
  perPage = 20,
}: UsePaginationOptions = {}) {
  const [page, setPage] = useQueryState("page", { defaultValue: initialPage });

  const nextPrevPage = (page: string) =>
    setPage((prev) => Math.max(1, +prev + +page).toString());
  const goToPage = (p: number) => setPage(Math.max(1, p).toString());

  const offset = (+page - 1) * perPage;

  return {
    page,
    perPage,
    offset,
    limit: perPage,
    setPage,
    nextPrevPage,
    goToPage,
  };
}

export function usePaginationState({
  perPage = 20,
}: UsePaginationOptions = {}) {
  const [page, setPage] = useState<string>("1");
  const [search, setSearch] = useState<string>("");
  const nextPrevPage = (page: string) =>
    setPage((prev) => Math.max(1, +prev + +page).toString());
  const goToPage = (p: number) => setPage(Math.max(1, p).toString());

  const offset = (+page - 1) * perPage;
  return {
    search,
    setSearch,
    page,
    perPage,
    offset,
    limit: perPage,
    setPage,
    nextPrevPage,
    goToPage,
  };
}
