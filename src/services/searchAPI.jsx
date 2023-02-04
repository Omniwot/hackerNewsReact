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
  let timeStamp = Date.now();
  if (filterTime === 'Last 24H') {
    timeStamp -= (24 * 60 * 60 * 1000);
  } else if (filterTime === 'Past Week') {
    timeStamp -= (7 * 24 * 60 * 60 * 1000);
  } else if (filterTime === 'Past Month') {
    timeStamp -= (30 * 24 * 60 * 60 * 1000);
  } else if (filterTime === 'Past Year') {
    timeStamp -= (365 * 24 * 60 * 60 * 1000);
  }
  const filterTimeString = (filterTime !== 'All time') ? `&numericFilters=created_at_i>${timeStamp / 1000}` : '';
  return http.get(`http://hn.algolia.com/api/v1/${filterSortString}?query=${search}&tags=${filterTypeString}${filterTimeString}&page=${page}&hitsPerPage=${10}`);
}

function getSortedStories(page = 0) {
  return http.get(`http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=${10}`);
}

export { searchStories, getSortedStories };
