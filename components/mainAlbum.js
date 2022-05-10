
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function MainAlbum({album}) {

  return (
  <Grid container component="main" sx={{ height: '100vh' }}>
    <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography component="h1" variant="h5" sx={{ padding: "5px"}}>
        Titulo: {album.title}
      </Typography>
      <Typography component="h1" variant="h5" sx={{ padding: "5px"}}>
        Criado por: {album.userId}
      </Typography>
    </Box>
  </Grid>
  </Grid>
  );
}

export default MainAlbum;