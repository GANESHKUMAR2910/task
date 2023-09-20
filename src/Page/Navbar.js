import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const History = useNavigate();
  const Logout = () => {
    localStorage.setItem("isLogin", false);
    History("/");
  };
  return (
    <div>
      <div className="Navbar">
        <h1>Shop cliq</h1>
        <div className="Help">
          <h3 className="space">Home</h3>
          <h3 className="space">login</h3>
          <h3 className="space">help</h3>
        </div>
        <div className="userName">
          <h3>userName</h3>
          <h3 className="cart">Add to cart</h3>
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
