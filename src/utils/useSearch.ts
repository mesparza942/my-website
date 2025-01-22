import { useMemo } from "react";
import Fuse from "fuse.js";

interface UseSearchProps<DataType> {
  data: DataType[];
  searchKeys: string[];
  searchTerm: string;
}
export function useSearch<DataType>({
  data,
  searchKeys,
  searchTerm,
}: UseSearchProps<DataType>) {
  const response = useMemo(() => {
    const fuse = new Fuse(data, {
      keys: searchKeys,
      includeScore: true,
      includeMatches: true,
      threshold: 0.4, // Allow fuzzy matching for typos
    });

    return fuse.search(searchTerm);
  }, [searchTerm, data, searchKeys]);

  const result = useMemo(() => {
    if (response.length) {
      return response;
    }
    return [];
  }, [response]);

  return result;
}
