import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployeesAsync } from "../actions/employeeActions";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeesAsync());
  }, [dispatch]);

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

export default EmployeeList;
