import HeadingComponent from "./Header";
import UserClass from "./UserClass";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <HeadingComponent />
      <div className="contact-page-container">
        <div className="contact-form-wrapper">
          <h2 className="contact-heading">We would love to hear from you!</h2>

          <form className="contact-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
              />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email" className="form-input" />
              <input
                type="text"
                placeholder="Contact Number (Optional)"
                className="form-input"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="form-textarea"
            ></textarea>

            <div className="form-button-container">
              <button
                type="submit"
                className="text-white contact-submit-button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
