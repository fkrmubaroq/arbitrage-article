import { debounce } from "@/lib/utils";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "./input";

export default function InputDebounce({ value, onChangeValue, ...props }: UIInput.InputDebounceProps) {
     const [currentValue, setCurrentValue] = useState<string>(value?.toString() || '');

  const [callback] = useState(() => debounce(onChangeValue));

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    callback(e.target.value);
  };

  useEffect(() => {
    setCurrentValue(value?.toString() || '');
  }, [value]);
    return <Input {...props} value={currentValue} onChange={onChange} />
}