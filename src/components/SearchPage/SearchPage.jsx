import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Typography } from '@mui/material';
import StoryCard from '../StoryCard/Story';
import { getSortedStories, searchStories } from '../../services/searchAPI';
import Dropdown from '../DropdownSelect/Dropdown';

function SearchPage() {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterTime, setFilterTime] = useState('All');
  const [filterSort, setFilterSort] = useState('Date');
  const [maxPages, setMaxPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const filterValues = [['All', 'Stories', 'Comments'], ['Date', 'Popularity'], ['All', 'Stories', 'Comments']];

  const handlePageChange = (event, value) => {
    setPage(value);
    setIsLoading(true);
    getSortedStories(page).then((storiesData) => {
      setStories(storiesData.data.hits);
      setMaxPages(storiesData.data.nbPages);
      setIsLoading(false);
    });
  };

  const handleSearch = () => {
    setIsLoading(true);
    searchStories(page, search, filterSort, filterTime, filterType).then((storiesData) => {
      setStories(storiesData.data.hits);
      setMaxPages(storiesData.data.nbPages);
      setIsLoading(false);
    });
  };

  const onChangeSearch = (e) => {
    const searchVal = e.target.value;
    setSearch(searchVal);
  };

  const handleSelectType = (value) => {
    setFilterType(value);
  };
  const handleSelectTime = (value) => {
    setFilterTime(value);
  };
  const handleSelectSort = (value) => {
    setFilterSort(value);
  };

  useEffect(() => {
    if (stories.length === 0) {
      getSortedStories(page).then((storiesData) => {
        setStories(storiesData.data.hits);
        setMaxPages(storiesData.data.nbPages);
      });
    }
  }, []);

  const displayStories = stories
    .map((story) => (
      <div>
        <StoryCard story={story} />
      </div>
    ));

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for ..."
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={onChangeSearch}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
        <Dropdown handleSelect={handleSelectType} values={filterValues[0]} filter="type" label="Search for" defaultValue={filterValues[0][0]} />
        <Dropdown handleSelect={handleSelectSort} values={filterValues[1]} filter="sort" label="by" defaultValue={filterValues[1][0]} />
        <Dropdown handleSelect={handleSelectTime} values={filterValues[2]} filter="time" label="for" defaultValue={filterValues[2][0]} />
      </Paper>
      {isLoading && <Typography sx={{ margin: '20rem' }} variant="h4" component="div"> Loading ....</Typography>}
      <div className="SortedStories">
        {!isLoading && displayStories}
      </div>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Stack spacing={2} sx={{ marginBottom: '0.5rem', textAlign: 'center' }}>
          <Pagination count={maxPages} variant="outlined" color="primary" page={page} onChange={handlePageChange} />
        </Stack>
      </Grid>
    </div>
  );
}

export default SearchPage;