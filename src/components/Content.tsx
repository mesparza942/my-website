import { useEffect, useRef, useState } from "react";

import Loading from "./Loading";
import Container from "./Container";
import SearchBar from "./SearchBar";
import ExperienceSummary from "./ExperienceSummary";
import SearchResults from "./SearchResults";

import { useDebounce } from "../utils/useDebounce";

const Content = () => {
  const [search, setSearch] = useDebounce("", 500);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (newVal: string) => {
    setLoading(true);
    setSearch(newVal);
    timeoutRef.current = setTimeout(() => setLoading(false), 800);
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [timeoutRef]);
  return (
    <>
      <SearchBar value={search} onChange={handleSearch} />
      {loading ? <Loading /> : null}
      <Container className="w-full p-4">
        {search ? <SearchResults searchTerm={search} /> : <ExperienceSummary />}
      </Container>
    </>
  );
};

export default Content;
