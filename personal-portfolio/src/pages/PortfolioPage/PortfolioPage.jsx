import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Accordian from 'react-bootstrap/Accordion'
import Carousel from 'react-bootstrap/Carousel'
import OffCanvas from 'react-bootstrap/Offcanvas'
import Card from 'react-bootstrap/Card'



import profile from '../../assets/images/profile.png'

import bugbuddy from '../../assets/images/BugBuddy.png'
import bugbuddy2 from '../../assets/images/bugbuddy2.png'
import bugbuddy3 from '../../assets/images/bugbuddy3.png'
import bugbuddy4 from '../../assets/images/bugbuddy4.png'
import bugbuddy5 from '../../assets/images/bugbuddy5.png'

import starman from '../../assets/images/Starman.png'
import movie1 from '../../assets/images/movie1.png'
import movie2 from '../../assets/images/movie2.png'
import movie3 from '../../assets/images/movie3.png'
import movie4 from '../../assets/images/movie4.png'


import './PortfolioPage.css'
function AboutPage() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <Card style={{ width: '45rem' }}>
            <Card.Img variant='top' src={profile} />
            <Card.Body>
                <Card.Title class='display-2'>Joshua Lawlor</Card.Title>
                <Card.Text class='lead'>Full-Stack software engineer, with a background in Customer Service. Dedicated to learning new methods and skills that will help me achieve my goals in the future. Extremely comfortable working in a challenging work environment. Always excited to bring my own experiences to the table and collaborate with others toward a common goal. Believe every problem has a solution, and every process can be improved. Thoroughly enjoy dissecting complex issues and deploying dynamic solutions.</Card.Text>
            </Card.Body>
        </Card>
       

    )
}

export default AboutPage