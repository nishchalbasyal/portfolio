import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

 const MainPage = ({setOpenModal}) => {

  return (
    <div>
     <Navigation setOpenModal={setOpenModal}/>
     <Outlet />
     <Footer />

      
    </div>
  )
}

export default MainPage
