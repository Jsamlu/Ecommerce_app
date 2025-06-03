import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
const Navigation = () => {
  const navlinks = [
    { link: "/shop", label: "Shop" },
    { link: "/electronics", label: "Electronics" },
    { link: "#", label: "Women" },
    { link: "#", label: "Kids" }
  ];

  const actIcons = [{icon:<CiHeart/>, name:"fav"},
    {icon:<CiShoppingCart/>, name:"cart"},
    {icon:<VscAccount/>, name:"login"}
  ]

  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-40">
      <div className="">
        {/* logo */}
        <Link to="/" className="text-3xl text-black font-bold text-center">StoreShop</Link>
      </div>
      <div className="flex flex-wrap items-center gap-7 flex-1 transition-all duration-300">
        {/* links */}
        {navlinks.map((item, index) => {
          return (
            <Link
              className="text-gray-500 hover:text-black text-lg font-semibold"
              key={index}
              to={item.link}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center border rounded overflow-hidden ">
        {/*Search Bar*/}
        <button>
          <CiSearch className="text-2xl" />
        </button>
        <input type="textfield" className="outline-none   " />
      </div>

      <div className="flex items-center gap-5">
        {/* action buttons */}
        {actIcons.map((item, index) =>{
          return(
            <button className="p-1 text-3xl text-black font-bold hover:text-white bg-white hover:bg-black rounded-full transition-all duration-300" key={index}>{item.icon}</button>
          );
        
        })}
      </div>

    </nav>
  );
};

export default Navigation;
