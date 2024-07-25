import { MdOutlineDesignServices } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";
import { FaRegMoneyBill1 } from "react-icons/fa6";

const ExploreContainer = ({name, icon, value}) => {
  return (
    <div className="container border  p-5 flex flex-col gap-3">
      <MdOutlineDesignServices size={35}/>
      <h2 className="text-xl">{name}</h2>
      <div className="explore-right flex items-center gap-3 cursor-pointer">
        <p className="font-semibold text-gray-700 hover:text-gray-500 flex">
          {value} jobs<span className="hidden md:block">available</span>
        </p>
        {<FaLongArrowAltRight size={27} color="gray" />}
      </div>
    </div>
  );
};

export default ExploreContainer;
