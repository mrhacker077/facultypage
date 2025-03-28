import logo from "../assets/logo.png"; // Import the logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Karnataka Govt. Polytechnic Logo" className="logo" />
        <div>
          <h1>KARNATAKA (GOVT.) POLYTECHNIC, MANGALORE</h1> <br />
          <h2>FACULTIES</h2>
        </div>
        
      </div> <hr />
    </nav>
  );
};

export default Navbar;
