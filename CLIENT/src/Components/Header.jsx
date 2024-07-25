import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

export default function Header({ name }) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  }, [name]);

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    setIsSignIn(false);
    navigate("/");
  };

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-300  h-12 flex items-center">
      <div className="mx-24 flex justify-between w-full">
        <div className="flex items-center">
          <FacebookOutlinedIcon className="ml-4" />
          <TwitterIcon className="ml-8" />
          <InstagramIcon className="ml-8" />
        </div>
        <div className="bg-white rounded-lg p-1 flex items-center">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="outline-none rounded-lg px-2 placeholder:text-lg "
          />
        </div>


        {isSignIn ? (
          <div className="flex items-center bg-gray-600 rounded-xl">
            <span className="block  py-2 text-white ">
              <AccountCircleIcon className="mx-1" />
              {name}
            </span>
            <ArrowDropDownIcon
              onClick={handleDropdown}
              className="text-red-300 cursor-pointer"
            />
            {isDropdownOpen && (
              <div className="absolute right-24 top-10 rounded-lg bg-red-200 mt-2  bg-white ">
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-red-300 hover:rounded-lg"
                  onClick={handleSignOut}
                >
                  Sign-Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="border shadow-2xl bg-black opacity-80 rounded-lg flex justify-center items-center">
            <button
              className="px-1 py-1 text-xl text-blue-50 font-extralight"
              onClick={handleSignIn}
            >
              <AccountCircleIcon className="mx-1" />
              Sign-In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
