import Link from "next/link";

export default function Blogs(){

    return(
        <>
        <div>
        <h1 className="BlogCss">Good Morning Readers!</h1> 
        <p><Link href="/Login">Login</Link></p>
        <Link href="/Signup">Signup</Link>
        </div>
        
        <div className="AllBlogsBG">
            <h3 className=" BlogCss1">All Blogs</h3>
            <div class="card cardwith" >
            <div class="card-body">
              <div className="combineDiv">
  <img src="https://10619-2.s.cdn12.com/rests/original/342_401510269.jpg" class=" imgBlog" alt="..." />
  <div className="blogDisplay">
    <h5 class="card-title">Card title</h5>
    <p>Auther Name <span>Date Parah idhr</span></p> 
    
    </div>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
    
    <Link href="/" class=" BlogLink">See All From This User</Link>
  </div>
</div>
        </div>
        
        </>
    )
}