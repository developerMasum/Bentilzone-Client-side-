import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// import Logo from '../Shared/Navbar/Logo'
import { GrLogout } from "react-icons/gr";
import { FcHome, FcSettings } from "react-icons/fc";
import { BsCart, BsFillHouseAddFill } from "react-icons/bs";

import { AuthContext } from "../../providers/AuthProvider";
import { MdManageHistory, MdPayment } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../../components/Hooks/useAdmin";
const Sidebar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const [isActive, setActive] = useState("false");
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };


const[isAdmin] = useAdmin();



  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
           {
            isAdmin ? <>  <nav>
            <>
              {/* Menu Links */}
              <NavLink
                to="/dashboard/add-Item"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <BsFillHouseAddFill className="w-5 h-5" />

                <span className="mx-4 font-medium">Add Item</span>
              </NavLink>
              <NavLink
                to="/dashboard/manage-Item"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdManageHistory className="w-5 h-5" />

                <span className="mx-4 font-medium">Manage Item</span>
              </NavLink>
              <NavLink
                to="/dashboard/manage-user"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaUsers className="w-5 h-5" />

                <span className="mx-4 font-medium">Manage User</span>
              </NavLink>
            </>
          </nav> </>
            :
            
            
            <>
             <nav>
              <>
                {/* Menu Links */}
                <NavLink
                  to="/dashboard/my-cart"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <BsCart className="w-5 h-5" />

                  <span className="mx-4 font-medium">My Cart</span>
                </NavLink>
                <NavLink
                  to="/dashboard/payment-history"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdPayment className="w-5 h-5" />

                  <span className="mx-4 font-medium">Payment History</span>
                </NavLink>
               
              </>
            </nav>  </>
            
           }
          </div>
        </div>

        <div>
          <hr />
          <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <FcHome className="w-5 h-5" />

                  <span className="mx-4 font-medium">Home</span>
                </NavLink>

          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
