import Link from 'next/link'

function Index({ albums }) {
  return (
    <div>
      {albums.map((album) => (
      <div key={album.id}>
      <p>Nome: {album.title} </p>
      </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const albums = await res.json()

  return {
    props: {
      albums,
    },
  }
}

export default Index
