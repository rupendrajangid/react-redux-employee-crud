import React, { useState } from "react"; // Importing React and useState hook from react library
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux to dispatch actions to Redux store
import { deleteEmployee, updateEmployee } from "../actions/employeeActions"; // Importing deleteEmployee and updateEmployee action creators from the employeeActions.js file

// Functional component representing a single employee item in the list
const EmployeeItem = ({ employee, index }) => {
  const dispatch = useDispatch();

  // State variables to manage the editing state and edited values
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(employee.name);
  const [editedEmail, setEditedEmail] = useState(employee.email);
  const [editedPosition, setEditedPosition] = useState(employee.position);
  const [editedDepartment, setEditedDepartment] = useState(employee.department);

  // Function to delete an employee
  const handleDelete = () => {
    dispatch(deleteEmployee(employee.id));
  };

  // Function for toggle the edit mode
  const handleEditToggle = () => {
    setEditing(!isEditing);
  };

  const handleUpdate = () => {
    // Created an updated employee object with edited values
    const updatedEmployee = {
      ...employee,
      name: editedName,
      email: editedEmail,
      position: editedPosition,
      department: editedDepartment,
    };

    // Dispatching the updated employee data to the state
    dispatch(updateEmployee(updatedEmployee));
    // Closing the edit mode after update
    setEditing(false);
  };

  //JSX rendering
  return (
    <tr>
      <td>{index}</td>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={editedPosition}
              onChange={(e) => setEditedPosition(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={editedDepartment}
              onChange={(e) => setEditedDepartment(e.target.value)}
            />
          </td>
          <td>
            <button className="btn btn-success" onClick={handleUpdate}>
              Save
            </button>
            <button
              className="btn btn-secondary ms-2"
              onClick={handleEditToggle}
            >
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.position}</td>
          <td>{employee.department}</td>
          <td>
            <button className="btn btn-primary" onClick={handleEditToggle}>
              Edit
            </button>
            <button className="btn btn-danger ms-2" onClick={handleDelete}>
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default EmployeeItem;
