import "./scss/App.scss";
 import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
 import MainPage from "./pages/MainPage";
 import { useState } from "react";

function App() {
  const[openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage  setOpenModal={setOpenModal}/>}>
          <Route index element={<HomePage openModal={openModal} setOpenModal={setOpenModal}/>}></Route>
 
        </Route>
        
      </Routes>
    

    </div>
  );
}

export default App;
