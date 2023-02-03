import http from './common';

function searchStories(page, search, filterSort, filterTime, filterType) {
  return http.get(`http://hn.algolia.com/api/v1/search?query=${search}&tags=${filterType}&page=${page}&hitsPerPage=${10}`);
}

function getSortedStories(page = 0) {
  return http.get(`http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=${10}`);
}

export { searchStories, getSortedStories };
