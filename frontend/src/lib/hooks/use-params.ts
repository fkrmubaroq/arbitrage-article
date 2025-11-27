import { useQueryState } from 'nuqs';
import { usePagination } from "./use-pagination";

export function useParams() {
  const [search, setSearch] = useQueryState("search", { defaultValue: ""});
  const [status, setStatus] = useQueryState("status");
  const [author, setAuthor] = useQueryState("author");
  const pagination = usePagination();

  return {
    ...pagination,
    search,
    setSearch,
    status,
    setStatus,
    author,
    setAuthor,
  };
}