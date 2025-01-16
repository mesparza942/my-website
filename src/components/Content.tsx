import Loading from "./Loading";
import Container from "./Container";
import SearchBar from "./SearchBar";
import ExperienceSummary from "./ExperienceSummary";
import SearchResults from "./SearchResults";

import { useDebounce } from "../utils/useDebounce";

/* HTML: <div class="loader"></div> */
// .loader {
//   height: 4px;
//   width: 130px;
//   --c:no-repeat linear-gradient(#6100ee 0 0);
//   background: var(--c),var(--c),#d7b8fc;
//   background-size: 60% 100%;
//   animation: l16 3s infinite;
// }

const Content = () => {
  const [search, setSearch] = useDebounce("", 500);
  return (
    <>
      <SearchBar value={search} onChange={(newVal) => setSearch(newVal)} />
      <Loading />
      <Container className="w-full p-4">
        {search ? <SearchResults searchTerm={search} /> : <ExperienceSummary />}
      </Container>
    </>
  );
};

export default Content;
