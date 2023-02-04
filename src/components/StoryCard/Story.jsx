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
  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    setShow(false);
  };
  return (
    <Card
      key={story.id}
      elevation="2"
      sx={{
        margin: '0.3rem', textAlign: 'left', border: 0.5, borderColor: 'grey.300',
      }}
    >
      {show && (
      <>
        <CardContent sx={{ margin: '0.2rem', padding: '0.1rem' }}>
          <div>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              {story.title}
            </Typography>

          </div>
        </CardContent>
        <CardActions sx={{ margin: '0', padding: '0' }}>
          <Button sx={{ fontSize: '0.7rem', mr: '1rem' }} size="small" color="error" onClick={handleClick}>Hide</Button>
          <Button sx={{ fontSize: '0.7rem', mr: '1rem' }} size="small" color="success" href={story.url}>Learn More</Button>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
            Created by
            {' '}
            {story.author}
            {' at '}
            {time}
            {' '}
            {date}
            {' '}
            | Points
            {' '}
            {story.points}
          </Typography>
        </CardActions>
      </>
      )}
    </Card>
  );
}

export default StoryCard;
