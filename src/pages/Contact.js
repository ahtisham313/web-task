import React, { Fragment } from "react";
import Menu from "./Menu";
class Contact extends React.Component{
    render(){

    return( <div>
<Menu/>
<main>
      <h2 id="contact">Contact Us</h2>
      <div class="contact"/>
        <div class="info">
          <h3>Get in touch</h3>
          <p>If you have any questions, comments or suggestions, please don't hesitate to contact us!</p>
          <p>Address: university road,atd</p>
          <p>Phone: 9234276789</p>
          <p>Email: yummyeat@gmail.com</p>
        </div>
        <div class="feedback"/>
          <h3>Send us your feedback</h3>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required/>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
          </main>
    </div>
    
    
    
    )
    }
}export default Contact;