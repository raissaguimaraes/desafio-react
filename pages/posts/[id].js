import MainPost from "../../components/mainPost";

function Post({post}){

    return(
        <div>
            <MainPost title="From the firehose" post={post} />
        </div>
    )
} 

export default Post;

export async function getStaticProps() {
  const results = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  return {
    props: {
      post: results[0]
    }
  }
}

export async function getStaticPaths() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  return {
    paths: posts.map(post => {
      const id = post.id.toString();
      return {
        params: {
          id
        }
      }
    }),
    fallback: false
  }
}