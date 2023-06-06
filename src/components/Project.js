 const Project = ({title,description,image,tags,githublink,preview,featured}) => {
     const handleClick = (url)=>{

        if(url!==""){
            
            window.open(url,"_blank");
        }else{
            window.open('/')
        }
        
    }

    const featureimage = image !== ""?image: "/images/featureimage.png"
  return (
    <div className="container">
    <div className="card">
      <div className="front">
        <div className="image">
          <img
            src={featureimage}
            alt="img"
          />
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="description">
          <p>{description}
          </p>
        </div>
        <div className="tags">
            {tags.map((tag,index)=>{
                return(

                    <span key={index} className="tag">{tag}</span>
                )
            })

            }
     
        </div>
      </div>

      <div className="back">
        <div className="links">
          <button onClick={()=>handleClick(githublink)}>Github Link </button>
          {
            preview && 
          <button onClick={()=>handleClick(preview)}>Preview</button>
          }
        </div>

        
      </div>
    </div>
  </div>
  )
}

export default Project
