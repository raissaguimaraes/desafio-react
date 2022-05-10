
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function MediaCard({albums}) {

  return (
    <Grid container spacing={4}>
    {albums.map((album) => (
      <Grid item key={album.id} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {album.title}
            </Typography>
            <Typography>
              Criado por: {album.userId}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link href={`/albums/${encodeURIComponent(album.id)}`}>
              Visualizar
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
  );
}

export default MediaCard;