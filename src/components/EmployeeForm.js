import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../actions/employeeActions";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: new Date().getTime(),
      name,
      email,
      position,
      department,
    };
    dispatch(addEmployee(newEmployee));
    // Reset the form fields
    setName("");
    setEmail("");
    setPosition("");
    setDepartment("");
  };

  return (
    <div className="container mt-4">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position:
          </label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department:
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
