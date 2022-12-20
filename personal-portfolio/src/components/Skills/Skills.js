import React from 'react'
import './Skills.css'
import { useState } from 'react'

function Skills() {

  const [skill, setSkill] = useState({
    skillList: ["Javascript", "REACT", "Node.js", "Express", "MongoDB", "Git", "CSS"]
  })


  return (
    <div className="container">
        <h1>Skills</h1>
        <div >
          {skill.skillList.map((i) =>{
            return(
            <ul>
           <li>{i}</li>
           <br/>
           </ul>
            )
            
          })}
          </div>
        
    </div>
  )
}

export default Skills