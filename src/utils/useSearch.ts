"use client";

import { useMemo } from "react";
import Fuse from "fuse.js";
import { trackSearchEvent } from "./eventTracking";

interface UseSearchProps<DataType> {
  data: DataType[];
  dataType: string;
  searchKeys: (keyof DataType)[];
  searchTerm: string;
}
export function useSearch<DataType>({
  data,
  dataType,
  searchKeys,
  searchTerm,
}: UseSearchProps<DataType>) {
  const response = useMemo(() => {
    const fuse = new Fuse(data, {
      keys: searchKeys as string[],
      includeScore: true,
      includeMatches: true,
      threshold: 0.4, // Allow fuzzy matching for typos
    });

    return fuse.search(searchTerm);
  }, [searchTerm, data, searchKeys]);

  const result = useMemo(() => {
    trackSearchEvent(searchTerm, dataType, response.length);
    if (response.length) {
      return response;
    }
    return [];
  }, [response]); // eslint-disable-line react-hooks/exhaustive-deps

  return result;
}
