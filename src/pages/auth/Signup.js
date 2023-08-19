import Head from "next/head";
import Button from "../../component/Button/Btn";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function SignUp ({signin}) {
  signin = false
  const [inputText, setInputText] = useState('');
  const [inputText1, setInputText2] = useState('');

  const handleChange = (event) => {
   setInputText(event.target.value); 
  
   }; 
  const handleChange2 = (event) => {
     setInputText2(event.target.value);

    };

 useEffect(() => {
  const email = ( inputText)
  const pass = (inputText1)
  let prevEmails = localStorage.getItem("emails");
  let emails = prevEmails ? JSON.parse(prevEmails) : [];
  
  if(signin === false){
    setTimeout(()=> {
    let eml = {
      email: inputText,
      pass: inputText1
    };
  
    emails.push(eml);
    let stringfy = JSON.stringify(emails);
    localStorage.setItem("emails", stringfy)
  }, 300);
  if(email && pass !== "")
  document.getElementById("FormId").action = "/auth/popUpBox"
  }

   else if (signin === true) {
    const emailsa = emails.map( emaila => {
      if(email === emaila.email){
          const SingleEmail = emaila.email
           const passes = emails.map( ps => {
      if(pass === ps.pass){
          const singlePass = ps.pass

            if(  email && pass ){
       console.log(email)
        return ( 
          <>
            {document.getElementById("FormId").action = "/profile"}
            
         </>
        )
      } 
       else console.log("not work")
    } 
    
    })
  
  }
      })
  } 


});
    


    return(
        <>
        <Head >
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
        </Head>
        <div className="singDiv"><h1 className="signup"> Singup</h1></div>
        
        {/* Form */}
  <center > <form id="FormId"> <div className="formSize" >
        <div class="mb-3 ">
  
  <input  type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" /> <br />
  <input   type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" /> <br />
  <input onChange={(handleChange)} value={inputText} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" /> <br />
  <input   type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" /> <br />
  <input  onChange={handleChange2} value={inputText1}  type="password" class="form-control" id="exampleFormControlInput1" placeholder="Repeat Password" /> <br />
</div>
<Link
                  href={signin ? "/auth/Login" : "/auth/Login"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"} <br />
                </Link> <br />
<button onSubmit={SignUp}> Signup</button>
</div> </form> </center> 
        </>
    )
}