import React from 'react'
import { useState } from 'react'
import './About.css'

function About() {

  const [about, setAbout] = useState({
    info: "I am an aspiring Software Developer, with a background as a Data Specialist as well as Customer Service roles. ",
    hobbies: ["Hiking", "Reading", "Listening to Music", "Watching Movies", "Video Games/Board Games"]

  })

  return (
    
    <div className='container'>
      <h1 class='display-1'>About Me</h1>
  
  </div>
  )
}

export default About