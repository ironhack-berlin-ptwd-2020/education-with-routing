// components/Education.js

import React from 'react';
import { Link } from 'react-router-dom';

import myEducation from '../educationArr.json'

const education = () => {

  return (
    <div>
      <h2>Education:</h2>
      {myEducation.map((eachSchool, index) => {
        return (
          <div key={index}>
            <h3><Link to={"/education/" + eachSchool.schoolID}>{eachSchool.schoolName}</Link></h3>
          </div>
        )
      })}
    </div>
  )
}

export default education;