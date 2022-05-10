import FeaturedPost from "../../components/featuredPost";
import { Typography, Grid } from "@mui/material";

function Posts ({posts}) {
    return(
      <Grid>
        <Typography variant="h4" color="#18B7BE" gutterBottom component="div"> 
        Postagens
        </Typography>
        {posts.map((post) => (
        <FeaturedPost post={post} />
        ))}
      </Grid>
    )
}

export default Posts;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
      revalidate: 5,
    }
  }