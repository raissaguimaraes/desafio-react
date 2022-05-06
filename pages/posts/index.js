function Posts ({posts}) {
    return(
    <div>
          {posts.map((post) => (
          <div key={post.id}>
          <p>Nome: {post.title} </p>
          <p>Created by: {post.userId}</p>
          <p>Descrição: {post.body} </p>
          </div>
          ))}
    </div>
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