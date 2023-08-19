import Button from "@/component/Button/Btn";
import Link from "next/link";

export default function MyBlog(){


    return(<>
                        <div className='headerComb'>
        <h1 className="BlogCss">Dashboard</h1> 
        <div className='linkDiv1'>
           <Link className='links' href="/Profile/Profile">Profile</Link>
        <Link  className='links'href="/">Logout</Link>
        </div>
       
        </div>
    <div className="AllBlogsBG">
        <div className="MyNewBog">
                <div className=" paddingDiv">
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Placeholder" /> <br />
    <textarea type="text" class="form-control" id="exampleFormControlInput1" placeholder="What is in your mind" /> <br />
    <button className="primary">Publish</button>
        </div>
    </div>
    <h1 className="myBlogH1">My Blogs</h1>
    <div class="card cardwith" >
            <div class="card-body">
              <div className="combineDiv">
  <img src="https://media.wired.com/photos/64d4170d32101aa6f13ca1ff/master/w_1600,c_limit/Elon-Musk-@Music-Handle-X-Business-1258664001.jpg" class=" imgBlog" alt="..." />
  <div className="blogDisplay">
    <h5 class="card-title">Card title</h5>
    <p>Auther Name <span>Date Parah idhr</span></p> 
    
    </div>
    </div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
    
    <p href="#" class=" BlogLink">Edit <span class=" BlogLink"> Delete</span></p>
  </div>
</div>
    </div>
  
    </>)
}