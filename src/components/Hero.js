import { Link} from "react-scroll";

const Hero = ({setOpenModal}) => {
  return (
    <div className="Hero">
      <div className="text-section">
        <div className="headline">
          Hi <br />
          I am "Nishchal Basyal"
          <br />
          <span>
            {" "}
            <strong>Full Stack Web Developer</strong>
          </span>
          <br />
        </div>
        <div className="paragraph">
          Eager, fresh developer skilled in MERN, Python, SASS & Django.
          Passionate about backend work, ready to collaborate on impactful web
          solutions and data exploration. Let's create together!
        </div>

        <div className="btn-group">
          <button className="button" onClick={()=>setOpenModal(true)}>Contact Me</button>
          <Link className="button btn-filled" to="projects" duration={500} smooth={true} >See My Projects</Link>
         </div>
      </div>

      <div className="image-section">
        <div className="profile-image">
          <img src="profile-22.jpg" alt="Nishchal Basyal"></img>
         </div>
      </div>
    </div>
  );
};

export default Hero;
