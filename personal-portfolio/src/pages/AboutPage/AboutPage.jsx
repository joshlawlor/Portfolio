import React from 'react'
import Card from 'react-bootstrap/Card'
import './AboutPage.css';


function AboutPage() {
  return (
    <div>
      <Card style={{ width: '45rem' }}>
        <Card.Body>
          <Card.Title class='display-2'>About Me</Card.Title>
          <Card.Text class='lead'>I am an aspiring Software Developer, with a background as a Data Specialist as well as
            Customer Service roles. I have always had a passion for Computer Science, when I was in high school
            I built my first personal computer! That computer has been through many modifications, and is
            still what I use today. I was inspired to start my journey as a Software Engineer when I came across
            some online coding challenges. I was surprised at how much fun I had doing them, but never expected to
            fall in love with it. I have put myself through the Software Engineering Immersive course with General Assembly, while
            working full time. This experience was definitely challenging but taught me patience and time management
            </Card.Text>
            <Card.Title class='display-2'>My Skills</Card.Title>
            <Card.Text class='lead'>
              <ul>
                <li>Javascript</li>
                <li>Python</li>
                <li>React.js</li>
                <li>JQuery</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Styled-Components</li>
                <li>Materialize</li>
                <li>Trello</li>
                <li>MySQL</li>
                <li>Heroku</li>
                <li>PostgreSQL</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Git Workflow</li>


              </ul>
            </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AboutPage