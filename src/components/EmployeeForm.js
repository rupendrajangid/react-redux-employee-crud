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
      <div>
        <h2>Add Employee</h2>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-1">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1">
            <label htmlFor="position" className="form-label">
              Position:
            </label>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1">
            <label htmlFor="department" className="form-label">
              Department:
            </label>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
