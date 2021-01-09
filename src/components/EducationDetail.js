// components/Education.js

import React from 'react';
import { Link } from 'react-router-dom';

import myEducation from '../educationArr.json'

const educationdetail = (props) => {

  // props.match.params is the parts of the URL that *you* named
  // e.g. /education/:PandaPotato
  // console.log("THE params: ", props.match.params)

  let currentDetails = myEducation.find(e => e.schoolID === props.match.params.theID)

  return (
    <div>
      <h2>{currentDetails.schoolName}</h2>
      <p>{currentDetails.city}, {currentDetails.country}</p>
      <h4>{currentDetails.degree}</h4>
      <p>{currentDetails.schoolStarted} - {currentDetails.schoolEnded}</p>
    </div>
  )
}

export default educationdetail;