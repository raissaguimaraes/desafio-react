import MediaCard from '../../components/midiaCard';
import { Grid, Typography } from '@mui/material';

function Albums ({albums}) {
      return (
        <Grid>
            <Typography variant="h4" color="#18B7BE" gutterBottom component="div"> 
             Albums
            </Typography>
           <MediaCard albums={albums}/>
        </Grid>
      )
}

export default Albums;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = await res.json()
  
    return {
      props: {
        albums,
      },
      revalidate: 5,
    }
  }