import React from 'react';

function Contact() {

    return(
        <div className="contact-div">
    <section>
    <h1 className="title">Contact me</h1>
    <form id="contact-form" >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          rows="5"
        />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  </section>
  </div>
    );
}

export default Contact;