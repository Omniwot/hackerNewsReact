import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link, Typography } from '@mui/material';
import HTMLReactParser from 'html-react-parser';
import DOMPurify from 'dompurify';

function CommentCard({ comment }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(comment.created_at).toLocaleDateString([], options);
  const time = new Date(comment.created_at).toLocaleTimeString([]);
  const htmlFrom = (htmlString) => {
    const cleanHtmlString = DOMPurify.sanitize(
      htmlString,
      { USE_PROFILES: { html: true } },
    );
    const html = HTMLReactParser(cleanHtmlString);
    return html;
  };
  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    setShow(false);
  };

  return (
    <Card
      key={comment.id}
      elevation="2"
      sx={{
        margin: '0.4rem', textAlign: 'left', border: 0.5, borderColor: 'grey.300',
      }}
    >
      {show && (
      <>
        <CardContent sx={{ margin: '0.2rem', padding: '0.1rem' }}>
          <div>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
              {htmlFrom(comment.comment_text)}
            </Typography>

          </div>
        </CardContent>
        <CardActions sx={{ margin: '0', padding: '0' }}>
          <Button sx={{ fontSize: '0.7rem', mr: '1rem' }} size="small" color="error" onClick={handleClick}>Hide</Button>
          <Button sx={{ fontSize: '0.7rem', mr: '1rem' }} size="small" color="success" href={comment.url}>Learn More</Button>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
            Commented by
            {' '}
            {comment.author}
            {' at '}
            {time}
            {' '}
            {date}
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            | Main Story:
            {' '}
            <Link underline="hover" href={comment.story_url} sx={{ textDecoration: 'none', color: 'inherit' }}>{comment.story_title}</Link>
          </Typography>
        </CardActions>
      </>
      )}
    </Card>
  );
}

export default CommentCard;
