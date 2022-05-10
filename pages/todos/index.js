import TodoList from '../../components/todoList';
import { Typography } from '@mui/material';

function Todos ({todos}) {

    return(
      <>
        <Typography variant="h4" color="#18B7BE" gutterBottom component="div"> 
          TO-DO's
        </Typography>
        <TodoList todos={todos} />
      </>
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