import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
const Navigation = () => {
  const navlinks = [
    { link: "#", label: "Shop" },
    { link: "#", label: "Men" },
    { link: "#", label: "Women" },
    { link: "#", label: "Kids" }
  ];

  const actIcons = [{icon:<CiHeart className="text-3xl text-gray-600 hover:fill-black"/>, name:"fav"},
    {icon:<CiShoppingCart className="text-3xl text-gray-600 hover:fill-black"/>, name:"cart"},
    {icon:<VscAccount className="text-3xl text-gray-600 hover:fill-black"/>, name:"login"}
  ]

  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-40">
      <div className="">
        {/* logo */}
        <h2 className="text-3xl text-black font-bold text-center">StoreShop</h2>
      </div>
      <div className="flex flex-wrap items-center gap-7 flex-1 ">
        {/* links */}
        {navlinks.map((item, index) => {
          return (
            <Link
              className="text-gray-600 hover:text-black text-lg"
              key={index}
              to={item.link}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center border rounded overflow-hidden">
        {/*Search Bar*/}
        <button>
          <CiSearch className="text-2xl" />
        </button>
        <input type="textfield" className="outline-none" />
      </div>

      <div className="flex items-center gap-5">
        {/* action buttons */}
        {actIcons.map((item, index) =>{
          return(
            <button key={index}>{item.icon}</button>
          );
        
        })}
      </div>

    </nav>
  );
};

export default Navigation;
