import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost({post}) {

  return (
    <Grid item xs={12} md={6} padding="15px">
      <CardActionArea component="a" href="/posts">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h5" variant="h5">
             Titulo: {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Criado Por: {post.userId}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <Link href={`/posts/${encodeURIComponent(post.id)}`}>
                Continue lendo...
              </Link>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block'  }}}
            src='https://source.unsplash.com/random'
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;