import React from 'react';
import emailjs from 'emailjs-com';
import keys from '../keys';

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(keys.SERVICE_ID, keys.TEMPLATE_ID, e.target, keys.USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert("Message has been sent!");
    e.target.reset();
  }
  
  return (
    <section id="contact" className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required className="input" />
        <input type="email" name="email" placeholder="Email" required className="input" />
        <input type="text" name="subject" placeholder="Subject" required className="input" />
        <textarea name="message" placeholder="Message" required />
        <input type="submit" value="Send Message" className="form__btn" />
      </form>
    </section>
  );
}

export default Contact;