import fiscal from "./AuthenAsset/fiscal.png";
import hired from "./AuthenAsset/Group 110.png";
import hireDetails from "./AuthenAsset/Group 111.png";
import logo from "../../assets/Frame 3.png";
import { Link } from "react-router-dom";

const LeftSign = () => {
  return (
    <>
      <div className="left hidden w-1/2 h-full bg-gray-100 lg:block relative">
        <Link to="/">
          <header className="flex gap-2 mx-16 my-8">
            <img src={logo} />
            <p className="text-xl font-semibold">InternHub</p>
          </header>
        </Link>

        <img src={fiscal} className="h-3/4 absolute bottom-0 right-20" />
        <img src={hired} className="absolute left-10" />
        <img src={hireDetails} className="absolute bottom-12 right-8" />
      </div>
    </>
  );
};

export default LeftSign;
