import { SearchIcon } from "lucide-react";
import InputDebounce from "./input-debounce";

export default function InputSearch({ ...props }: UIInput.InputSearchProps) {
    return <div className="relative flex-1 mb-3">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <InputDebounce
            type="search"
            placeholder="Search"
            className="pl-8 w-56"
            {...props}
        />
    </div>
}