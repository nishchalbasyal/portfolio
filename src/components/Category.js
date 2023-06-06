 
const Category = ({setCurrentCategory,currentCategory}) => {
    const categories = ["All","React","Javascript","MERN","Data Science","Android","Asp.Net","API"]
  return (
    <div className="category">
       {
        categories.map((data,index)=>{
            return(

                <button key={index} onClick={()=>setCurrentCategory(data)} className={currentCategory===data?"active":''}>{data}</button>
            )
        })
       }
    </div>
  )
}

export default Category
