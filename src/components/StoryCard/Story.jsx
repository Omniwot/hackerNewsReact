import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function StoryCard({ story }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(story.created_at).toLocaleDateString([], options);
  const time = new Date(story.created_at).toLocaleTimeString([]);
  return (
    <Card key={story.id} elevation="3" sx={{ margin: '0.4rem', textAlign: 'left' }}>
      <CardContent sx={{ margin: '0.1rem', padding: '0.1rem' }}>
        <div>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            {story.title}
          </Typography>

        </div>
      </CardContent>
      <CardActions sx={{ margin: '0', padding: '0' }}>
        <Button sx={{ fontSize: '0.7rem', mr: '1rem' }} size="small">Share</Button>
        <Button sx={{ fontSize: '0.7rem', mr: '1rem' }} size="small" color="success" href={story.url}>Learn More</Button>
        <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
          {date}
          {' '}
          {time}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default StoryCard;
