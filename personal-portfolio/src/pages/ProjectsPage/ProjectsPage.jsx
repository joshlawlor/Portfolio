import React from 'react'
import Button from 'react-bootstrap/Button'
import Accordian from 'react-bootstrap/Accordion'
import Carousel from 'react-bootstrap/Carousel'
import OffCanvas from 'react-bootstrap/Offcanvas'
import Card from 'react-bootstrap/Card'

import './ProjectsPage.css';

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

function ProjectsPage() {
  return (
    <div>      
            <Card style={{ width: '60rem' }}>
            <Card.Body>
                <Card.Title class='display-2'>My Projects</Card.Title>
                <br/>
                <div className="projects">
                <Accordian style={{ width: '75rem'}}className="accordion">
                    <Accordian.Item className="accordion" eventKey="0">

                        <Accordian.Header className="accordion">Project 1: Starman</Accordian.Header>
                        <Accordian.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={starman}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <p class='lead'>My very first application! I love looking back on this project and seeing how far
                            I have come as a Developer. I still enjoy playing this Hangman style game with a
                            Sci-Fi twist! Thinking of rebuilding it soon to be mobile friendly, and maybe incorporating
                            more game modes and a larger word bank! Check out my Readme to play!</p>
                            
                        </Accordian.Body>
                    </Accordian.Item>
                    <Accordian.Item className="accordion" eventKey="1">
                        <Accordian.Header>Project 2: Movie App</Accordian.Header>
                        <Accordian.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={movie1}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={movie2}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={movie3}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={movie4}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <p class='lead'>My very first group coding project! I love looking back on this project and seeing how far
                            I have come as a Developer. Thinking of rebuilding it soon to be mobile friendly, and maybe incorporating a larger API!</p>
                            
                        </Accordian.Body>
                    </Accordian.Item>
                    <Accordian.Item className="accordion" eventKey="2">
                        <Accordian.Header>Project 3: BugBuddy</Accordian.Header>
                        <Accordian.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={bugbuddy}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={bugbuddy2}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={bugbuddy3}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={bugbuddy4}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src={bugbuddy5}
                                        alt="Starman"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <p class='lead'>This is my cornerstone project for my GA Software Engineering Immersive course!
                            The goal was to create an app that I myself would use. This is a passion project of
                            mine, the first iteration being just a simple forum based MERN app. Users can signup
                            and start making posts and comment on other users posts. I am actively adding to this project
                            to make it a real platform for programmers to Debug! Check out my Repo to see what's coming next!</p>
                
                        </Accordian.Body>
                    </Accordian.Item>

                </Accordian>
            </div>

            </Card.Body>
        </Card>

       
    </div>
  )
}

export default ProjectsPage