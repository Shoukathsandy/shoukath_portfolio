import React from 'react';
import "../App.css";

export default function Contact() {
  return (
    <>
      <div className="topic">CONTACT</div>
      <div className='container'>
        <div className='row skill-btn'>
            <div className="col-lg-4 col-sm-12">
                <button className='fluid one'>
               <p className='clr'>shoukathsandy@gmail.com</p>
                </button>
                <button className='fluid two'>
                    <div><a className='clr' href="https://github.com/Shoukathsandy" target="_blank">GITHUB</a></div>
                </button>
                <button className='fluid four'>
                    <div><a className='clr' href="http://surl.li/cugan" target="_blank">LINKEDIN</a></div>
                </button>
                <button className='fluid five'>
                   <p className='clr'>9677705312</p>
                </button>
            </div>
        </div>
      </div>
    </>
  )
};
