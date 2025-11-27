import { ResponseCreateArticles } from "@/app/api/_hooks/article/use-create-article";
import { useSessionStorage } from "./use-session-storage";

export default function useStorageArticle(){
    const storage = useSessionStorage<ResponseCreateArticles["data"] | null>("temp-article", null);
    return storage
}