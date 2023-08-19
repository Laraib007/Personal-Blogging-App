
import { Inter } from 'next/font/google'
import Link from 'next/link';




const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const {title, todos} = props;
  if(!todos) {
    return <div>Loading...</div>
  }
  const todosList = todos.map(todo => {
    return (<li key={todo.id}>

            <div class="card cardwith" >
            <div class="card-body">
              <div className="combineDiv">
  <img src="https://10619-2.s.cdn12.com/rests/original/342_401510269.jpg" class=" imgBlog" alt="..." />
  <div className="blogDisplay">
    <h5 class="card-title">{todo.name}</h5>
    <p> {todo.email} <span></span></p> 
    
    </div>
    </div>
    <p class="card-text">{todo.body}</p> 
    
    <p href="#" class=" BlogLink">See All From This User</p>
  </div>
</div>
    
        
    </li>)
  })
  return (
    <div>
                    <div className='headerComb'>
        <h1 className="BlogCss">Good Morning Readers!</h1> 
        <div className='linkDiv'>
           <Link className='links' href="/auth/Login">Login</Link>
        <Link  className='links'href="/auth/Signup">Signup</Link>
        </div>
       
        </div>
        <div className="AllBlogsBG">
            <h3 className=" BlogCss1">All Blogs</h3>
                </div>
      <h1>{title}</h1>
      {todosList}
    </div>
  )
}

export async function getStaticProps () {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return {
    props: {
      todos: data
    },
    revalidate: 10,
  };
}
