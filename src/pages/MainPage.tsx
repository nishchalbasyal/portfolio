import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Dispatch, SetStateAction } from "react";

type MainPageProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const MainPage = ({ setOpenModal }: MainPageProps) => {
  return (
    <div>
      <Navigation setOpenModal={setOpenModal} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
