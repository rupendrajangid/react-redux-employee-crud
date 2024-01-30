// Importing dependencies from React and Redux
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Importing the asynchronous action creator to fetch employees
import { fetchEmployeesAsync } from "../actions/employeeActions";

// Importing the EmployeeItem component to render single employee details
import EmployeeItem from "./EmployeeItem";

// Function for EmployeeList
const EmployeeList = () => {
  // Retrieving employees state
  const employees = useSelector((state) => state.employees);

  // Creating a dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeesAsync()); // Dispatching the asynchronous action to fetch employees
  }, [dispatch]); // array to ensures the effect runs only on mount and when dispatch changes

  // JSX rendering
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Employee List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <EmployeeItem
              key={employee.id}
              employee={employee}
              index={index + 1} // Use the array index plus 1
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exporting the EmployeeList
export default EmployeeList;
