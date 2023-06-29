import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../components/Avatar/Avatar";
import { AuthContext } from "../providers/AuthProvider";
import logo from "../assets/images/chef1.png";
import { BiShoppingBag } from "react-icons/bi";
import useCart from "../components/Hooks/useCart";
import { motion } from "framer-motion";
import { MdAdminPanelSettings } from "react-icons/md";
import useAdmin from "../components/Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  // const isAdmin = true;

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const navOptions = (

  // );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className={`btn btn-ghost lg:hidden ${
                menuOpen ? "active" : "default"
              }`}
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52 ${
                menuOpen ? "active" : "default"
              }`}
            >
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    onClick={toggleMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    onClick={toggleMenu}
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    onClick={toggleMenu}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    onClick={toggleMenu}
                  >
                    About us
                  </NavLink>
                </li>
                {/* 
      {user ? (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "default")}
              onClick={toggleMenu}
            >
              <button>
                <BiShoppingBag className="h-6 w-6" />
              </button>{" "}
              <div className="badge badge-success">{cart?.length || 0}</div>
            </NavLink>
          </li>
        </>
      )
    : 
    ' '
    } */}


 
  <li>
    { user && isAdmin ? (
      <>
        {" "}
        <NavLink
          to="/dashboard/manage-item"
          className={({ isActive }) =>
            isActive ? "active" : "default"
          }
          onClick={toggleMenu}
        >
           <button className="flex gap-1 ">
            <MdAdminPanelSettings className="h-6 w-6 text-red-800" /> <span>Admin Panel</span>
          </button>{" "}
        </NavLink>{" "}
      </>
    ) : user ? (
      <>
        <NavLink
          to="/dashboard/my-cart"
          className={({ isActive }) =>
            isActive ? "active" : "default"
          }
          onClick={toggleMenu}
        >
          <button>
            <BiShoppingBag className="h-6 w-6" />
          </button>{" "}
          <div className="badge badge-success">
            {cart?.length || 0}
          </div>
        </NavLink>
      </>
    ) : (
      " "
    )}
  </li>

              </>
            </ul>
          </div>
          <p className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" className="w-12 h-12" />{" "}
            <p className="text-slate-950  ">Bentilzone</p>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={toggleMenu}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={toggleMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={toggleMenu}
                >
                  About us
                </NavLink>
              </li>
              {/* 
      {user ? (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "default")}
              onClick={toggleMenu}
            >
              <button>
                <BiShoppingBag className="h-6 w-6" />
              </button>{" "}
              <div className="badge badge-success">{cart?.length || 0}</div>
            </NavLink>
          </li>
        </>
      )
    : 
    ' '
    } */}
{
  
  <li>
    { user&& isAdmin ? (
      <>
        {" "}
        <NavLink
          to="/dashboard/manage-item"
          className={({ isActive }) =>
            isActive ? "active" : "default"
          }
          onClick={toggleMenu}
        >
          <button className="flex gap-1 ">
            <MdAdminPanelSettings className="h-6 w-6 text-red-800" /> <span>Admin Panel</span>
          </button>{" "}
        </NavLink>{" "}
      </>
    ) : user ? (
      <>
        <NavLink
          to="/dashboard/my-cart"
          className={({ isActive }) =>
            isActive ? "active" : "default"
          }
          onClick={toggleMenu}
        >
          <button>
            <BiShoppingBag className="h-6 w-6" />
          </button>{" "}
          <div className="badge badge-success">
            {cart?.length || 0}
          </div>
        </NavLink>
      </>
    ) : (
      " "
    )}
  </li>
}
            </>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <motion.button
                onClick={handleLogOut}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
              >
                LogOut
              </motion.button>

              <Avatar />
            </>
          ) : (
            <>
              <li className="btn btn-warning">
                <Link to="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
