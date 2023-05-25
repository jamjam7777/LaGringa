import ArtItem from "../components/ArtItem";
import React from 'react';
import Arnette from '../assets/arnette-armadillo.jpg';
import '../styles/Contact.css';
import { Card } from "@mui/material";
import { useParams } from "react-router-dom";


function DetailArt() {

  const  detailart  = useParams();

    return (
     
      <div className='contact'>
          <div className='leftSide'
              style={{ backgroundImage: `url(${detailart})` }}
          ></div>
          <div className='rightSide'>
              <h1> {`artItem.name`} </h1>
              <Card id="contact-form">
            <button type="submit"> Send Message</button>
          </Card>
          </div>
      </div>
    )
  }
  
  


export default DetailArt;
