import React from 'react'
import Button from '@mui/material/Button';

export default function Homes() {
  return (
    <>
 
      <div className="row home">
        <div className="col-12 col-lg-6 ">
      <h1 className="animate-charcter">Welcome to my portfolio website.</h1>
      <h1 className="animate-charcter">{`Hi! I'm Shoukath Ali `} </h1><br></br>
        <h4 className="animate-charcter">I'm an MERN stack developer.</h4>
        <div className="hm">
        <Button href="http://surl.li/cugan" target="_blank" variant="contained" color="primary">LinkedIn</Button>
        <Button href="https://github.com/Shoukathsandy" target="_blank" variant="contained" color="primary">GitHub</Button>
        </div>
        </div>
        <div className="col-12 col-lg-6 fluid-flex">
        <img src="welcome1.jpg" alt="welcome"  className="img-fluid"/>
        </div>
        </div>
     
         
      



    </>
  )
}
