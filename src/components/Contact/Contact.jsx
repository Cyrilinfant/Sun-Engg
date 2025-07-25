import React from "react";
import "./Contact.css";
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import fax_icon from '../../assets/fax_icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c16e1d7-736a-4851-a956-71b4e451b8e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>
          Feel free to reach out through our contact form or use the contact
          information provided below. Your feedback, questions, and suggestions
          are important to us as we continually strive to deliver exceptional
          engineering solutions and service to our clients and partners.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" className="mail" />
            <div className="email-list">
              <a href="mailto:sunengg.tri@gmail.com">sunengg.tri@gmail.com</a>
              <a href="mailto:rajkumarpe@yahoo.com">rajkumarpe@yahoo.com</a>
              <a href="mailto:suneng@aol.in">suneng@aol.in</a>
              <a href="mailto:rajkumarpe@gmail.com">rajkumarpe@gmail.com</a>
            </div>
          </li>
          <li> <img src={phone_icon} alt="" />+91 4312340 546 </li>
          <li> <img src={fax_icon} alt="" />+91431 4050 546</li>
          <li><img src={phone_icon} alt="" />+91 98400 90546,+91 99444 01546 </li>
          <li><img src={location_icon} alt="" />TRICHY /3315110528E. </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="Name" placeholder="Enter your name " required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your Mobile Number" required />
          <label>Write your message here!</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
