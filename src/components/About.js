import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
 import { redirectToNewTab } from "./SocialLinks";

const About = () => {
   return (
    <div className="about" >
      <div className="box">
        <h1>Who Am I ?</h1>
        <hr></hr>
        <div className="section">
          <div className="image-box">
            <img src="/profile-1.jpg" alt="profile-img" />
          </div>
          <div className="content-box">
            <p>
              Hello, I am Nishchal Basyal, a Computer Engineering student with a
              keen interest in technology. I consider myself an explorer who is
              passionate about both technology and traveling. Throughout my
              academic journey, I have delved into various technologies,
              acquiring skills through both formal education and self-learning.
              I am proficient in coding with Python, Java, JavaScript, C#, C,
              and C++. However, I specialize in Python and Java, and I have also
              developed skills in the MERN stack.
            </p>
            <div className="socialLinks">
              <h2>Know More</h2>
              <hr />
              <span className="icon-group">
                <FaFacebook
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  className="social-icon"
                  onClick={()=>redirectToNewTab('https://www.facebook.com/profile.php?id=100079568690720')}
                />
                <FaTwitter
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  className="social-icon"
                  onClick={()=>redirectToNewTab('https://twitter.com/nishchalbasyal')}
                />
                <FaLinkedin
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  className="social-icon"
              onClick={()=>redirectToNewTab('https://www.linkedin.com/in/nishchalbasyal/')}

                />
                <FaInstagram
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  className="social-icon"
                  onClick={()=>redirectToNewTab('https://www.instagram.com/nishchalbasyal/ ')}

                />
              </span>
            </div>

            <div className="email">
              <h2>Email</h2>
              <hr />
              <span>
                <MdOutlineEmail
                  style={{ fontSize: "15px", cursor: "pointer" }}
                />
                <p>basyalnishchal@gmail.com</p>
              </span>
            </div>

            <div className="btn-group">
              <button onClick={()=>redirectToNewTab('https://bit.ly/43HCSe2')}>Download Resume</button>
              <button onClick={()=>redirectToNewTab('https://github.com/nishchalbasyal')}>Github Link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
