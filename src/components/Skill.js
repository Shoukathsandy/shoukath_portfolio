import React from 'react';
import "../App.css";

export default function Skill() {
  return (
   <>
   <div className="container skill-topic"><b>Skills</b></div>
    <div className="container skill-p">
      <div className="row skill-btn">
        <div className="col-lg-3">
        <div className='skill-grp'>
   <button className="custom-btn btn-1 w-100">HTML</button>
   <button className="custom-btn btn-2 w-100">CSS</button>
   <button className="custom-btn btn-3 w-100">JAVASCRIPT</button>
   <button className="custom-btn btn-4 w-100">BOOTSTRAP</button>
   </div>
        </div>
        <div className="col-lg-3">
        <div className='skill-grp'>
   <button className="custom-btn btn-5 w-100">REACT.JS</button>
   <button className="custom-btn btn-6 w-100">MATERIUALUI</button>
   <button className="custom-btn btn-7 w-100">NODE.JS</button>
   <button className="custom-btn btn-8 w-100">EXPRESS.JS</button>
   </div>
        </div>
        <div className="col-lg-3">
        <div className='btn-9-ht w-100'>   <button className="custom-btn btn-9 w-100">MONGODB</button></div>
        </div>
      </div>
    </div>
   </>
  )
}
