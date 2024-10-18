import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormDataEmployees = () => {
  const { register, handleSubmit, reset } = useForm();
  const [employees, setEmployees] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to show per page

  const onSubmit = (data) => {
    setEmployees([...employees, { ...data, id: Date.now() }]);
    reset();
  };

  const handleRemove = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2
        className="text-center mb-10 text-2xl font-semibold"
        style={{ color: "#026980" }}
      >
        Employee Management
      </h2>

      {isFormVisible && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex space-x-4">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-border-color"
            />
            <input
              {...register("role", { required: true })}
              placeholder="Role"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-border-color"
            />
          </div>

          <div className="flex space-x-4">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-border-color"
            />
            <input
              {...register("phone", { required: true })}
              placeholder="Phone"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-border-color"
            />
          </div>

          <div className="flex space-x-4">
            <input
              {...register("startDate", { required: true })}
              type="date"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-border-color"
            />
            <select
              {...register("active", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-border-color"
            >
              <option value="">Select Active Status</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-background-color text-white rounded-md px-4 py-2 mt-6"
          >
            Add Employee
          </button>
        </form>
      )}

      <div className="flex flex-col md:flex-row md:justify-around items-center mb-4">
        <div className="my-4 w-full w-[70%] ">
          <input
            type="text"
            placeholder="Search Employee by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-border-color"
          />
        </div>

        <button
          onClick={() => setIsFormVisible((prev) => !prev)}
          className="bg-background-color text-white rounded-md px-4 py-2 transition duration-300 hover:bg-opacity-80"
        >
          {isFormVisible ? "Hide Form" : "Add Employee"}
        </button>
      </div>

      <h2 className="text-xl my-8 font-medium">Employee List</h2>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Role</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Phone</th>
            <th className="py-3 px-6 text-left">Start Date</th>
            <th className="py-3 px-6 text-left">Active</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {currentEmployees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{employee.name}</td>
              <td className="py-3 px-6">{employee.role}</td>
              <td className="py-3 px-6">{employee.email}</td>
              <td className="py-3 px-6">{employee.phone}</td>
              <td className="py-3 px-6">{employee.startDate}</td>
              <td className="py-3 px-6">
                {employee.active === "true" ? (
                  <span className="text-green-600 font-semibold">Active</span>
                ) : (
                  <span className="text-red-600 font-semibold">Inactive</span>
                )}
              </td>
              <td className="py-3 px-6">
                <button
                  onClick={() => handleRemove(employee.id)}
                  className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-background-color text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormDataEmployees;
