import Mond from "../mond";
import Sonne from "../sonne";
import "./nav.css";

const Nav = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav>
      <a href="">JS.</a>
      <ul>
        <a href="">projects</a>
        <a href="">skills</a>
        <a href="">contact</a>
        <div onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
          {isDarkMode ? <Mond /> : <Sonne />}
        </div>
      </ul>
    </nav>
  );
};
export default Nav;
