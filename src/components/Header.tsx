import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="   py-6">
       <div className=" container mx-auto flex justify-between">
        <span className=" text-3xl text-white font-bold tracking-tight">
          <Link to="/">Hotel Book</Link>
        </span>
        <span className=" flex space-x-2">
          <Link 
          to="/sign-in" 
          className=" flex text-white border-2 rounded-full hover:bg-white hover:text-black items-center px-4 py-1.5 font-medium hover:border-black">Sign In</Link>
        </span>
       </div>
    </div>
  );
}

export default Header;
