import React, { useContext } from "react";
import assets, { userDummyData } from "../assets/assets";

function Sidebar({ selectedUser, setSelectedUser }) {
  const { navigate } = useContext(AppContext);
  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-4 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-4">
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="logo" className="max-w-40" />
          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="max-h-4 cursor-pointer"
            />
            <div className="absolute hidden group-hover:block w-24 right-0 p-2 rounded">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>

        {/* SEARCH INPUT */}
        <div className="rounded-full bg-[#282142] flex items-center gap-2 py-4 px-6 mt-4">
          <img src={assets.search_icon} className="size-4" alt=" search" />
          <input
            type="text"
            placeholder="Search user"
            className="bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1"
          />
        </div>
      </div>

      {/* USERS PROFILE */}
      <div className="flex flex-col">
        {userDummyData.map((user, index) => (
          <div
            key={index}
            onClick={() => setSelectedUser(user)}
            className={`relative flex items-center hover:bg-purple-800/20 cursor-pointer gap-2 p2 pl-4 rounded cursor-pointer max-sm:text-sm ${
              selectedUser?._id === user._id && "bg-[#282142]/50"
            }`}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              className="size-8 rounded-full aspect-square"
              alt="user profile pic"
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {index < 3 ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text-xs">Offline</span>
              )}
            </div>
            {index > 2 && (
              <p className="absolute top-4 right-4 text-xs size-4 flex justify-center items-center rounded-full bg-violet-500/50">
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
import AppContext from "../context/AppContext";

export default Sidebar;
