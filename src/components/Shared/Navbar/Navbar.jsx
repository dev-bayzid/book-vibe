import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-bold mr-1 ${isActive ? "text-green-600 border border-green-500" : " "}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `font-bold mr-1 ${isActive ? "text-green-600 border border-green-500" : " "}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pages-to-go"}
          className={({ isActive }) =>
            `font-bold mr-1 ${isActive ? "text-green-600 border border-green-500" : " "}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className="font-bold text-3xl">Book Vibe</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn bg-green-500 border border-green-500 text-white">
            Sign In
          </button>
          <button className="btn bg-[#00CED1] border border-[#00CED1] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
