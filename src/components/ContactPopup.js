import {AiOutlineLinkedin} from "react-icons/ai"
import { redirectToNewTab } from "./SocialLinks";
const ContactPopup = ({ setOpenModal }) => {
  return (
    <div className="cpopup">
      <div className="popupContainer">
        <div className="btn-close">
        <button onClick={() => setOpenModal(false)}>X</button>

        </div>
        <div className="title">
          <h1>Thanks For Reaching Me</h1>
        </div>
        <div className="body">
          <p>
            Feel free to reach out! You can contact me via email or DM me on
            LinkedIn. Let's connect!
          </p>
          <div className="btn-group">
            <button onClick={()=>redirectToNewTab('https://www.linkedin.com/in/nishchalbasyal/')}><AiOutlineLinkedin style={{marginRight:"2px"}}/>Linkedin</button>
          </div>
          <hr />
          <span className="email">
            <p>
              Email: <strong className="email">basyalnishchal@gmail.com</strong>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
