import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import user from "../../assets/user.png";
import FormDataEmployees from "./FormDataEmployees";

const Employees = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
          Employees
        </h2>
        <div className="flex space-x-4 items-center">
          <div className="relative flex items-center">
            <IoMdNotificationsOutline
              size={32}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            />
            <span
              className="absolute -top-2 -right-1 rounded-full text-xs flex items-center justify-center w-5 h-5"
              style={{ backgroundColor: "#026980", color: "white" }}
            >
              3+
            </span>
          </div>
          <div className="relative flex items-center">
            <FaRegEnvelope
              size={32}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            />
            <span
              className="absolute -top-2 -right-3 text-white rounded-full text-xs flex items-center justify-center w-5 h-5"
              style={{ backgroundColor: "#026980", color: "white" }}
            >
              9+
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={user}
              alt="user"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <div>
              <h3 className="text-gray-800 font-medium">Mohamed Kamal</h3>
              <p className="text-gray-600 text-sm">Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <FormDataEmployees/>
      </div>
    </div>
  );
};

export default Employees;
