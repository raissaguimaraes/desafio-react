import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function MainPost({post}) {

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
        minHeight: '60vh'
      }}
    >
      <Typography variant="h4" color="#18B7BE" gutterBottom component="div"> 
      Post
      </Typography>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Divider />
        <Markdown className="markdown" key={post.id}>
         {post.body}
        </Markdown>
    </Grid>
  );
}

export default MainPost;