import { Outlet } from "react-router-dom";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

export default function AppComponent(){
  return(
      <>
      <HeaderComponent/>
      <Outlet />
      <FooterComponent/>
      </>
  );
}