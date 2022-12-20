import logo from './logo.svg';
import { Link,Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './pages/AboutPage/AboutPage'
import Projects from './pages/ProjectsPage/ProjectsPage'
import Contact from './components/ContactMe/ContactMe'
import Resume from './pages/ResumePage/ResumePage'
// import Skills from './components/Skills';
// import ContactMe from './components/ContactMe';

import Button from 'react-bootstrap/Button'
import Accordian from 'react-bootstrap/Accordion'
import Carousel from 'react-bootstrap/Carousel'
import OffCanvas from 'react-bootstrap/Offcanvas'
import Card from 'react-bootstrap/Card'

import profile from './assets/images/profile.png'


import Portfolio from './pages/PortfolioPage/PortfolioPage'
import AboutPage from './pages/PortfolioPage/PortfolioPage';

import emailjs from 'emailjs-com'
//Guide: In your App.js return below: 
// return (
//   <div className="App">
//Put your nav bar first with <Link> components
//Put your <Route> components after
//   </div>
// );


function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {

        const serviceId = 'service_o8ly56l';
        const templateId = 'template_pytc6gi';
        const userId = 'HJUztYR_aJXkoA6iE'
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
        
        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    }else {
        alert('Please fill in all fields.');
    }

    const isValidEmail = email => {
    }
  }


  return (
    <div style={{height: '100vh'}} className="App">

        <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/resume'>My Resume</Link></li>
            <li><Button  variant="outline-dark" onClick={handleShow}>Contact Me!</Button></li>
            
        </ul>
        <OffCanvas show={show} onHide={handleClose}>
                <OffCanvas.Header closeButton>
                    <OffCanvas.Title class='display-3'>Contact</OffCanvas.Title>
                </OffCanvas.Header>
                <OffCanvas.Body>
                    <h4>518-720-5073</h4>
                    <br/>
                    <h4>JoshLawlor1@gmail.com</h4>
                    <br />
                    <a class='display-5' href="https://docs.google.com/document/d/15iA-MwkEGeLe6YSs1jmJ2Y5t1Wj4euE9OP1jV2ayLEg/edit?usp=sharing">My Resume</a>
                    <br />
                    <br />
                    <a class='display-5' href="https://github.com/joshlawlor">Github</a>
                    <br />
                    <br />
                    <a class='display-5' href='https://www.linkedin.com/in/joshuaryanlawlor/'>LinkedIn</a>
                    <br/>
                    <br/>

                    <h4 class='display-5'>Get in touch!</h4>
        
                    <div id='contact-form'>
                        <input type="text" placeholder= "Your Name" value={name} onChange= {e => setName(e.target.value)} />
                        <br/>
                        <br/>
                        <input type="email" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)}/>
                        <br/>
                        <br/>
                        <textarea placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <br/>
                        <br/>
                        <button onClick={submit}>Send Message</button>
                        <span style={{display: emailSent ? 'block' : 'none'}}>Thank you for your message, I will be in touch in no time!</span>
                    </div>







                </OffCanvas.Body>
            </OffCanvas>

    <Routes>
      <Route path='/' element={<Portfolio/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>


    </div>

  );
}

export default App;