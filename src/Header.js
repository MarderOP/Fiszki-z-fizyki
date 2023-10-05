import { Outlet, Link } from "react-router-dom";
import favicon from "./images/favicon.ico";
import calculator from "./images/calculator.svg";
import info from "./images/info.svg";
import list from "./images/list.png"
const Header = () => {
    return(
  <header>
    <Link to="/info">
      <img draggable="false" src={info} alt="informations"></img>
    </Link>
    <Link to="/hub">
      <img draggable="false" src={favicon} alt="favicon"></img>
    </Link>
    <Link to="/kalkulator">
      <img draggable="false" src={calculator} alt="calculator"></img>
    </Link>
    <Link to="/create">
      <img draggable="false" src={list} alt="create new subject"></img>
    </Link>
    <Outlet />
  </header>
    );
};
export default Header;
