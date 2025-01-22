export function trackSearchEvent(
  searchTerm: string,
  searchType: string,
  resultsCount: number
) {
  // Send event to Google Analytics
  if (window.gtag) {
    window.gtag("event", "search_site", {
      search_term: searchTerm,
      search_type: searchType,
      results_count: resultsCount,
    });

    if (resultsCount === 0) {
      window.gtag("event", "no_results", {
        search_term: searchTerm,
        search_type: searchType,
      });
    }
  } else {
    // eslint-disable-next-line
    console.error("Google Analytics (gtag) is not initialized.");
  }
}
