import React from "react";
import profile from "../../assets/profile/profile5.jpg";

function About() {
  return (
    <div className="about-div fade-in">
      <div className="about-img">
        <img src={profile} height="600px" alt="profile"/>
      </div>
      <div className="about-text">
        <h2 className="title">About Me</h2>

        <p>
         My name is Brandon Anderson. I was born in Utah on April 3rd, 1997. We moved to Washington state for about 6 years before
         returning to Utah when I was 8 and have been here since. I've always loved technology and computers specifically. I made 
         my first program when I was about 12. With my dad's coaching I used Ruby on rails to make a calculator made specifically for 
         the game Monopoly. Later in High School I learned Java and developed my own version of Yahtzee which is when I decided that 
         software development is the career for me.
         </p>
        <p>
         I have never enjoyed learning more than I do now. Web Development is so much fun and I love expanding my skillsets. The
         problem solving aspect behind programming is the most attractive part and I'm pretty darn good at it if I do say so myself.
         </p>
      </div>
    </div>
  );
}

export default About;
