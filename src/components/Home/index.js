import React from 'react';
import profile from '../../assets/profile/profile2.jpg';

function Home() {

    return(
        <div className="home-div fade-in">
            <img src={profile} height='300px' className="profile-img" alt="profilepic"/>
            <h1 className="title">I'm Brandon Anderson</h1>
            <h3>I am a Full Stack Web Developer. I Currently work full time as a Software Developer using a mix of Angular, C#, HTML and CSS
                and in my spare time I am dedicating myself to learning React and becoming a front-end guru.
            </h3>
        </div>
    )
}

export default Home;