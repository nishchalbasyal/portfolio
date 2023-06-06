import { redirectToNewTab ,openEmailClient} from "./SocialLinks";
 
const Contact = () => {
  return (
    <div className="contact">
      <div className="section1">
         <p>Let's Connect and Collaborate! Reach Out to Me on LinkedIn or via Email for Exciting Opportunities and Engaging Conversations.</p>
      </div>
      <div className="section2">
      <button onClick={()=>redirectToNewTab('https://www.linkedin.com/in/nishchalbasyal/')}>LinkedIn</button>
        <button className="btn" onClick={()=>openEmailClient()}>Email Me</button>
      </div>
    </div>
  );
};

export default Contact;
