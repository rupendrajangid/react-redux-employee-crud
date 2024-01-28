// EmployeeItem.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee, updateEmployee } from "../actions/employeeActions";

const EmployeeItem = ({ employee, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(employee.name);
  const [editedEmail, setEditedEmail] = useState(employee.email);
  const [editedPosition, setEditedPosition] = useState(employee.position);
  const [editedDepartment, setEditedDepartment] = useState(employee.department);

  const handleDelete = () => {
    dispatch(deleteEmployee(employee.id));
  };

  const handleEditToggle = () => {
    setEditing(!isEditing);
  };

  const handleUpdate = () => {
    const updatedEmployee = {
      ...employee,
      name: editedName,
      email: editedEmail,
      position: editedPosition,
      department: editedDepartment,
    };

    dispatch(updateEmployee(updatedEmployee));
    setEditing(false);
  };

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
            <button
              className="btn btn-success"
              onClick={handleUpdate}
            >
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
            <button
              className="btn btn-primary"
              onClick={handleEditToggle}
            >
              Edit
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={handleDelete}
            >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default EmployeeItem;
