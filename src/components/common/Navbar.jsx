import {
  Disclosure,
  Menu,
} from "@headlessui/react";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../../context/userContext";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../action/useAuthentication";
import AddCustomer from "../AddCustomer";
import Logo from "../../assets/logoKhaata.png";

export default function Navar() {
  const { user } = useAuth();
  const { handleLogout } = useAuthentication();

  let userProfile = "";
  if (user?.user?.username === undefined) {
    userProfile =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOdXyDhfh8hsqc_m7EzsYyGf8Tc4Y-r7jlg&s";
  } else {
    userProfile = `https://ui-avatars.com/api/?background=random&color=fff&name=${user?.user?.username}`;
  }

  return (
    <Disclosure
      as="nav"
      className="bg-white/25 text-dark backdrop-blur-lg sticky top-0 border-b-4 border-l-indigo-700 z-20"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
            </Disclosure.Button>
          </div>

          <div className="flex items-center justify-between space-x-40 sm:items-stretch sm:justify-start">
            <div className="flex items-center text-gray-900">
              <Link to="/">
                <img
                  alt="YourKhaata.co"
                  src={Logo}
                  className="mx-auto h-14 rounded-full w-auto mix-blend-multiply inline-block"
                />
                <span>YourKHAATA.co</span>
              </Link>
            </div>

            <div className="flex text-indigo-700 font-semibold items-center space-x-5 font-mono">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {user.token ? (
              <div className="flex items-center font-bold cursor-pointer">
                <button
                  onClick={handleLogout}
                  className="flex items-center text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 space-x-2"
                >
                  <span>Logout</span>
                  <CiLogout size={24} className="text-white" />
                </button>
              </div>
            ) : (
              <span>
                <Link
                  to="/login"
                  className="button rounded-lg bg-green-600 hover:bg-red-700 p-2 mx-1 text-gray-100"
                >
                  Login
                </Link>
              </span>
            )}

            <Menu as="div" className="relative ml-1">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-12 w-12 ring-1 rounded-full p-1"
                    src={userProfile}
                    alt="User Profile"
                  />
                </Menu.Button>
              </div>
              <Menu.Items
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile" // Link to user profile page
                      className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                    >
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/settings" // Link to settings page
                      className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
