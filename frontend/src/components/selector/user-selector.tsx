"use client"

import * as React from "react";

import { useGetAllUser } from "@/app/api/_hooks/user/use-get-user";
import Combobox from "@/components/ui/combobox";

export default function UserSelector({ value, placeholder, onSelect, initialValue }: { initialValue?: string; value: string; placeholder: string, onSelect: (value: string) => void }) {
  const { data, isLoading } = useGetAllUser();
  const options = React.useMemo(() => data.map(item => ({ label: item.name || "", value: item.id })), [data])

  return (
    <Combobox
      initialValue={initialValue}
      options={options}
      value={value}
      placeholder={placeholder}
      isLoading={isLoading}
      onSelect={onSelect}

    />
  )
}
