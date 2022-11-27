import React, { useState } from 'react'
import "./projects.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Row, Col, Modal } from "react-bootstrap";


const detail = [
  {
    image: "/dress.png",
    title: "Dress Shop",
    description: "This is dress online sopping web app",
    tech: "stripe card",
    gitclient: "https://github.com/Shoukathsandy/dress_shop_client",
    gitserver: "https://github.com/Shoukathsandy/dress_shop_backend",
    livedemo: "https://dress-online-shoping.netlify.app",

  },
  {
    image: "/chat.png",
    title: "Chat App",
    description: "this is chat app with group",
    tech: "Socket.Io",
    gitclient: "https://github.com/Shoukathsandy/chatify_client",
    gitserver: "https://github.com/Shoukathsandy/chatify_server",
    livedemo: "https://melodious-alpaca-b4205c.netlify.app",

  },
  {
    image: "/tour.png",
    title: "Tour Blog",
    description: "this is Tour blog app",
    tech: "Json Web Token",
    gitclient: "https://github.com/Shoukathsandy/tour_app_client",
    gitserver: "https://tour-pedia-app.herokuapp.com",
    livedemo: "https://bespoke-sprinkles-edeca6.netlify.app",

  },
  {
    image: "/quomkr.png",
    title: "Quotation",
    description: "This is quotation making web app",
    tech: "Node Mailer",
    gitclient: "https://github.com/Shoukathsandy/quotation_maker_client",
    gitserver: "https://github.com/Shoukathsandy/quotation_maker_server",
    livedemo: "https://jolly-duckanoo-ff7366.netlify.app",

  }
]



function Projects() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row" >
      <div className="topic">Projects</div>
        <div className="m-5">
        <div><h3>Login Credential</h3></div>
        <div><h5>UserName/Email: test@gmail.com/test</h5></div>
        <div><h5>Password: Test@123</h5></div>
        <div><h3>TourPedia Credential</h3></div>
        <div><h5>UserName/Email: testmail@gmail.com/testmail</h5></div>
        <div><h5>Password: Test@123</h5></div>
        <div><h3>Admin Credential</h3></div>
        <div><h5>UserName/Email: admin@admin.com/admin</h5></div>
        <div><h5>Password: 123456</h5></div>
        </div>
       
        {detail.map((datas) => (
          <>
        
            <Card sx={{ maxWidth: 345 }} className="col-lg-3 col-md-6 col-sm-12 m-5 p-3  back" onClick={handleShow}>
              <CardMedia
                className="img-fluid"
                component="img"
                height="180"
                image={datas.image}
                alt={datas.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {datas.title}
                </Typography>
                <Typography>
                  <h3 className="">Tech Used</h3>
                  {/* <b>React.Js</b>
                  <b>Node.Js</b>
                  <b>Express.Js</b>
                  <b>MongoDb</b> */}
                  <h5 className="">{datas.tech} React Node MongoDb Express</h5>
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {datas.description}
                </Typography> */}
              </CardContent>
              <CardActions className="but">
                <Button href={datas.livedemo} target="_blank" className="btns m-1" variant="contained">Live Demo</Button>
                <Button href={datas.gitclient} target="_blank" className="btns" variant="contained"><GitHubIcon />git client</Button>
                <Button href={datas.gitserver} target="_blank" className="btns" variant="contained"><GitHubIcon />git server</Button>
              </CardActions>
           
            </Card>
           
            {/* <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title className="text-primary">{datas.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={datas.image}
                  alt={datas.title}
                  className="img-fluid"
                  style={{ height: "300px !important" }}
                />
                <p>{datas.description}</p>
                <p><b className="text-success">Tech Used</b></p>
                <ul class="list-group-item list-group-flush">
                  <li class="list-group-item list-group-item-primary">React.Js</li>
                  <li class="list-group-item list-group-item-secondary">MongoDb</li>
                  <li class="list-group-item list-group-item-success">Node.Js</li>
                  <li class="list-group-item list-group-item-danger">Express.Js</li>
                  <li class="list-group-item list-group-item-warning">{datas.tech}</li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-danger" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </Modal> */}

          </>
        ))}

      </div>


    </>

  )
}

export default Projects