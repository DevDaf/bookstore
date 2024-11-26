import { useDispatch, useSelector } from "react-redux";
import { UserDropdown } from "../components/Dropdown";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../Redux/Actions/User";
import Checkout from "../pages/Checkout";
import { useState } from "react";

const Navbar = () => {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const dispatch = useDispatch();

  const qty = useSelector((state) =>
    state.cartReducer.cartItems.reduce((total, item) => total + item.qty, 0)
  );

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVRv9Ihs3x-G7doClPSRF3IaO8MBWqHEV-67P1xwejWh2PXQRs"
              className="h-20 mr-10"
              alt="Spellbound Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
              Spellbound stories
            </span>
          </Link>

          <div className="flex md:order-2">
            {!userInfo ? (
              <>
                <Link
                  to="/register"
                  className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <UserDropdown logoutHandler={logoutHandler}></UserDropdown>
                </div>
                <button
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-black bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg"
                  aria-controls="navbar-cta"
                  aria-expanded="false"
                  onClick={() => setOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span>{qty}</span>
                </button>

                <Checkout open={open} setOpen={setOpen}></Checkout>
              </>
            )}
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black md:p-0"
                  aria-current="page"
                ></Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black md:p-0"
                  aria-current="page"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
