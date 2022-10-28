import React from 'react'
import Button from '@mui/material/Button';
import {fasave} from 'react-icons/fa';
export default function About() {
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
  return (
    <div>
      <div className="about">
      <div className="topic">
        <b>ABOUT</b>
      </div>
    <div className="container">
      <div className='row'>
        <div className='col-lg-6 '>
        <div className="date">
        {date}
      </div>
      <div>
        <h1>{`Hi! I'm Shoukath Ali `} </h1>
        <h4>I'm an MERN stack developer.</h4>
        <br></br>
        <i><q><b>I am MERN fullstack developer fresher in
          software design analysis, development,
          testing and implimentation of web and
          client server application using microsoft
          technologies ability to learn and
          develope using new technologies quickly
          with interpersonal skills.</b></q></i>
            <div className="fluid"> <a class="fluid btn-slide" href = "https://drive.google.com/file/d/1ZIEprl7KfsCXPlzIXnGjHGq2K--Fxoen/view?usp=sharing" target = "_blank">
      <span class="circle">
      <i class="fluid fa fa-save"></i>     
      </span>
    
      <span class="fluid title">Resume</span>
      <span class="fluid title title-hover">open now</span>
     </a> </div>
      </div>
        </div>
        <div className="col-lg-6  pic">
          <img class="img-fluid" src="https://binaryinformatics.com/wp-content/uploads/2019/01/MERN-Stack-Development-and-Consulting-Services.jpg"
           alt="MERN STACK DEVELOPER" />
        </div>
      </div>
    </div>
     
     
    </div>
    </div>
  )
}
