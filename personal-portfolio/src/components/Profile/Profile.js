import React from 'react'
import {useState} from 'react'



function Profile() {

  const [user, setUser] = useState({
    image: "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png",
    username: "JoshL",
    password: "********"
  })
  
  return (
    <div>
        <h1>Profile</h1>
        <img width={200} src='https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png'/>
      <h1>Username:  {user.username}</h1>
      <h2>Password: {user.password}</h2> 
      <button>Show Password</button> 
    </div>
  )
}

export default Profile