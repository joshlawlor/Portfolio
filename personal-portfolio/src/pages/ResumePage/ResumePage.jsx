import React from 'react'
import resume1 from '../../assets/images/resume1.jpg'
import resume2 from '../../assets/images/resume2.jpg'
import Card from 'react-bootstrap/Card'


function ResumePage() {
  return (
    <div>
 <Card style={{ width: '45rem' }}>
            <Card.Img variant='top' src={resume1} />
            <Card.Img variant='bottome' src={resume2}/>
        </Card>


    </div>
  )
}

export default ResumePage