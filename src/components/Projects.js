import Project from "./Project";
import data from "../data/data.json"
import { useState } from "react";
import Pagination from "./Pagination";
import Category from "./Category";
 const Projects = () => {
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [currentCategory,setCurrentCategory] = useState('All');
  const lastPostIndex  = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex  - postsPerPage;
  var projects = currentCategory === 'All'?data.projects:data.projects.filter((data)=> data.tags.includes(currentCategory))
  
   
  const currentProjects = projects.slice(firstPostIndex,lastPostIndex)
  return (
    <div className="project">
      <h1>My Projects</h1>
      <hr></hr>
      <Category currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
      <div className="project-section">

        { [...currentProjects].map( (data,index)=>{
            return(
           <Project key={index} title={data.title} description={data.description} tags={data.tags} image={data.image} githublink={data.githubLink} preview={data.preview} featured={data.featured}/>
            )
         })
      }


  
      </div>
      <Pagination totalposts={projects.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
};

export default Projects;
