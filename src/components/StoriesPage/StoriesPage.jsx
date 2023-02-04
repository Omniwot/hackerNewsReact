import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Grid, Typography } from '@mui/material';
import StoryCard from '../StoryCard/Story';
import { getSortedStories } from '../../services/searchAPI';

function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (event, value) => {
    setPage(value);
    setIsLoading(true);
    getSortedStories(page).then((storiesData) => {
      setStories(storiesData.data.hits);
      setMaxPages(storiesData.data.nbPages);
      setIsLoading(false);
    });
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
      {isLoading && <Typography sx={{ margin: '17.5rem' }} variant="h4" component="div"> Loading ....</Typography>}
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
        <Stack spacing={2} sx={{ marginBottom: '0.5rem', marginTop: '0.2rem', textAlign: 'center' }}>
          <Pagination count={maxPages} variant="outlined" color="primary" page={page} onChange={handlePageChange} />
        </Stack>
      </Grid>
    </div>
  );
}

export default StoriesPage;
