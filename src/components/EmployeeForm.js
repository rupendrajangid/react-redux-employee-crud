import React, { useState } from "react"; // Importing React library and useState hook from react
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import { addEmployee } from "../actions/employeeActions"; // Importing the addEmployee action creator from the employeeActions.js file

// Function for adding an employee
const EmployeeForm = () => {
  // State variables to manage form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");

  // Accessing the dispatch function from the Redux
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating a new employee object with the form input values & unique ID
    const newEmployee = {
      id: new Date().getTime(),
      name,
      email,
      position,
      department,
    };

    // Dispatch 'addEmployee' action with the new employee data
    dispatch(addEmployee(newEmployee));
    // Reset the form fields
    setName("");
    setEmail("");
    setPosition("");
    setDepartment("");
  };

  //JSX for render
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

//Exporting the AddEmployeeForm component
export default EmployeeForm;
