import { Link } from "react-router-dom";
import SlicePizza from "../assets/images/happyhour-pizza.jpg";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto p-4 lg:p-8 border-2 border-t-orange-500 bg-white z-50">
      <div className="flex items-center justify-around">
        <div>
          <h1 className="text-lg font-bold text-black">Plus Pizza</h1>
          <hr className="my-2" />
          <ul>
            <li className="hover:text-orange-500">
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-orange-500">
              {" "}
              <Link to={"about"}>About</Link>
            </li>
          </ul>
        </div>
        <img src={SlicePizza} alt="late afternoon pizza" className="h-28" />
      </div>
    </footer>
  );
};

export default Footer;
