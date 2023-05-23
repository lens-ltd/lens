import '../../index.css'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact_container">
        {/* CONTACT HEADING */}
        <section className="contact_header">
          <h2 className="contact_header_heading">
            Please leave us a quick message
          </h2>
          <p className="contact_heading_text">
            be it a point of correction, an simple message, or a business idea
            we want to hear from you
          </p>
        </section>
        {/* CONTACT FORM */}
        <section className="contact_form">
            <form action="" className="home_contact_form">
                {/* CONTACT FORM INPUTS */}
                <div className="contact_form_addresses">
                    <div className="contact_form_input">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="contact_name" placeholder="" autoComplete='true'/>
                    </div>
                    <div className="contact_form_input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="contact_email" placeholder="" autoComplete='true'/>
                    </div>
                </div>
                {/* CONTACT FORM MESSAGE */}
                <div className="contact_form_message">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="contact_message" placeholder=""></textarea>
                </div>
                <div className='contact_form_feedbacks'>
                  <p id='contact_form_progress'>Sending message</p>
                  <p id='contact_form_success'>Message sent successfully. We will reach back to you in seconds!</p>
                  <p id='contact_form_error'>Message not sent. Please refres and submit again!</p>
                </div>
                {/* CONTACT FORM CTA */}
                <div className="contact_form_cta">
                    <input type="submit" value="Send" className="contact_submit" />
                </div>
            </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
