import { Link     } from "react-scroll";

const Navigation = ({setOpenModal}) => {
  return (
    <div className="navigation">
      <div className="logo">
        <h1>Mr. Nishchal</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link
               to="about"
              spy={true}
              smooth={true}
               duration={500}
             >
              {" "}
              About
            </Link>
          </li>
          <li> 
          <Link
               to="projects"
              spy={true}
              smooth={true}
               duration={500}
            >
              {" "}
             Projects
            </Link>
            </li>
           <li> 
             <button onClick={()=>setOpenModal(true)}>Contact Me</button>
           </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
