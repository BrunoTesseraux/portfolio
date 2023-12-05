import "./nav.css";

const Nav = ({ toggleDarkMode }) => {
  return (
    <nav>
      <a href="">JS.</a>
      <ul>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <a href="">projects</a>
        <a href="">skills</a>
        <a href="">contact</a>
      </ul>
    </nav>
  );
};
export default Nav;
