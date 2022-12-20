import React from 'react'
import { useState } from 'react'
import OffCanvas from 'react-bootstrap/Offcanvas'



function ContactMe() {

  const [contact, setContact] = useState({
    name: "Josh Lawlor",
    phoneNumber: "518-720-5073",
    email: "JoshLawlor1@gmail.com",
    github: "https://github.com/joshlawlor",
    linkedIn: "https://www.linkedin.com/in/joshuaryanlawlor/"


  })

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  
  return (
    <div>
        <OffCanvas show={show} onHide={handleClose}>
                <OffCanvas.Header closeButton>
                    <OffCanvas.Title class='display-2'>Contact</OffCanvas.Title>
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
                </OffCanvas.Body>
            </OffCanvas>
    </div>
  )
}

export default ContactMe