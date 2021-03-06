import React from 'react';
import profile from '../../assets/profile/profile2.jpg';

function Home() {

    return(
        <div className="home-div fade-in">
            <img src={profile} height='300px' className="profile-img" alt="profilepic"/>
            <h1 className="title">I'm Brandon Anderson</h1>
            <h3>I am a Full Stack Web Developer. I am currently enrolled in a Full Stack coding bootcamp through the University of Utah. 
                I love programming and I'm passionate about learning more and widening my skillset. I'm also starving so please hire me...
            </h3>
        </div>
    )
}

export default Home;