import Button from "@/component/Button/Btn";
import Link from "next/link";

export default function Profile(){


    return(<>
                           <div className='headerComb'>
        <h1 className="BlogCss">Profile</h1> 
        <div className='linkDiv1'>
           <Link className='links' href="/MyBlog/MyBlog">Dashboard</Link>
        <Link  className='links'href="/">Logout</Link>
        </div>
       
        </div>

<div className="ProfileCss ">
     <div class="card " >
        <dvi className="ImgDiv">
            <img src="https://dl6pgk4f88hky.cloudfront.net/2022/12/2M0K7K9-1.jpg" class=" profileIMG" alt="..."/>
        </dvi>
  
  <div class="card-body">
    <h4 class="card-title">User Name</h4>
    <h5 class="card-title">Password</h5>
    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Old password" /> <br />
    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="New Password" /> <br />
    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Repeat Password" /> <br />
    <Button />
  </div>
  

</div>
</div>
   

    </>)
}