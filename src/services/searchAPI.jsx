import http from './common';

function searchStories(page, search, filterSort, filterTime, filterType) {
  const filterSortString = (filterSort === 'Popularity') ? 'search' : 'search_by_date';
  let filterTypeString = '';
  if (filterType === 'All') {
    filterTypeString = '(story,comment)';
  } else if (filterType === 'Stories') {
    filterTypeString = 'story';
  } else if (filterType === 'Comments') {
    filterTypeString = 'comment';
  }
  return http.get(`http://hn.algolia.com/api/v1/${filterSortString}?query=${search}&tags=${filterTypeString}&page=${page}&hitsPerPage=${10}`);
}

function getSortedStories(page = 0) {
  return http.get(`http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=${10}`);
}

export { searchStories, getSortedStories };
