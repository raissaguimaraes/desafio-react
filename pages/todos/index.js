function Todos ({todos}) {
    return(
    <div>
          {todos.map((todo) => (
          <div key={todo.id}>
          <p>Nome: {todo.title}</p>
          <p>Created by: {todo.userId}</p>
          <p>Status: {todo.completed}</p>
          </div>
          ))}
    </div>
    )
}

export default Todos;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
  
    return {
      props: {
       todos,
      },
      revalidate: 5,
    }
  }