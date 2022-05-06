import Link from 'next/link'

function Albums ({albums}) {
      return (
        <div>
          {albums.map((album) => (
          <div key={album.id}>
          <p>Nome: {album.title} </p>
          <p>Created by: {album.userId}</p>
          </div>
          ))}
        </div>
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
    }
  }