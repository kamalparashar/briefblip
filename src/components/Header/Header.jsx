import React from "react";
import { Logo, LogoutBtn} from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector(state => state.auth.status);
  const userData = useSelector(state => state.auth.userData);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      path: "/signup",
      active: !authStatus,
    },
  ];

  return (
    <header className='py-2 shadow-gray-600 shadow-sm w-full sticky top-0 z-10 bg-[#141414]'>
      <div className={`mx-0 min-w-full flex justify-end`}>
        <nav className="flex justify-center items-center">
          <div >
            <Link to="/">
              <Logo className=" w-[5vmax] flex justify-center items-center object-contain sm:justify-start"/>
            </Link>
          </div>
        </nav>

        <ul className='flex justify-between items-center ml-auto float-right'>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.path}>
                <button
                onClick={()=> navigate(item.path)}
                className='text-xl font-semibold inline-block px-3 rounded-full sm:px-2 sm:text-base'
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li key='/logout' className="pl-2">
              <LogoutBtn />
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;