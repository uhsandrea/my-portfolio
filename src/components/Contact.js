import React from 'react';
import emailjs from 'emailjs-com';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_mqh5skq', 'template_8r96ckn', e.target, 'user_DkPltbK5lDlyGL6KeC6Fu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert("Message has been sent!");
    e.target.reset();
  }
  
  return (
    <section className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <a href="https://github.com/uhsandrea" target="_blank" rel="noreferrer"><FaGithub /></a>
        <input type="text" name="name" placeholder="Name" required className="input" />
        <input type="email" name="email" placeholder="Email" required className="input" />
        <input type="text" name="subject" placeholder="Subject" required className="input" />
        <textarea name="message" placeholder="Message" required />
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}

export default Contact;