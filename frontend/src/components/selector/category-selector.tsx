"use client"

import * as React from "react";

import { useGetAllCategories } from "@/app/api/_hooks/category/use-get-category";
import Combobox from "@/components/ui/combobox";

export default function CategorySelector({ initialValue, value, placeholder, onSelect }: { initialValue: string; value: string; placeholder: string, onSelect: (value: string) => void }) {
  const { data, isLoading } = useGetAllCategories();
  const options = React.useMemo(() => data.map(item => ({ label: item.name, value: item.id })), [data])

  return (
    <Combobox
      initialValue={ initialValue}
      options={options}
      value={value}
      placeholder={placeholder}
      isLoading={isLoading}
      onSelect={onSelect}
    />
  )
}
