import MainAlbum from "../../components/mainAlbum";
import {Grid, Typography } from '@mui/material'

function Album({album}){

    return(
      <Grid>
        <Typography variant="h4" color="#18B7BE" gutterBottom component="div"> 
        Album
        </Typography>
          <MainAlbum title="From the firehose" album={album} />
      </Grid>
    )
} 



  export default Album;

  export async function getStaticProps() {
    const results = await fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json());
    return {
      props: {
        album: results[0]
      }
    }
  }

  export async function getStaticPaths() {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json());
    return {
      paths: albums.map(album => {
        const id = album.id.toString();
        return {
          params: {
            id
          }
        }
      }),
      fallback: false
    }
  }