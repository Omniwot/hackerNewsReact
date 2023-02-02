import http from './common';

function searchStories(query, by = 'q', page = 0) {
  return http.get(`prices?${by}=${query}&page=${page}`);
}

function getSortedStories(page = 0) {
  return http.get(`http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=${10}`);
}

export { searchStories, getSortedStories };
