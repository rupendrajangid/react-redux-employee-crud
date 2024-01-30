import axios from "axios"; //Imported axios library to make HTTP request

// Action creator to add an employee
export const addEmployee = (employee) => ({
  type: "ADD_EMPLOYEE", // Action type indicating adding of an employee
  payload: employee, // Data payload contains new employee information
});

// Action creator to delete an employee by ID
export const deleteEmployee = (id) => ({
  type: "DELETE_EMPLOYEE", // Action type indicating deleting of an employee
  payload: id, // Data payload contains the ID of the employee to be deleted
});

// Action creator to update an employee information
export const updateEmployee = (employee) => ({
  type: "UPDATE_EMPLOYEE", // Action type indicating an update to employee information
  payload: employee, // Data payload contains the updated employee information
});

// Action creator to fetch employees and updating the state
export const fetchEmployees = (employees) => ({
  type: "FETCH_EMPLOYEES", // Action type indicating fetching of employees
  payload: employees, // Data payload containing the array of employees
});

// Async action creator to fetch employees from an API
export const fetchEmployeesAsync = () => {
  return async (dispatch) => {
    try {
      // Creating GET request for API endpoint to fetch employees
      const response = await axios.get(
        "https://react-redux-employee-crud.vercel.app/employees"
      );
      // Dispatching the fetched employees to the state
      dispatch(fetchEmployees(response.data));
    } catch (error) {
      // Error Handling
      console.error("Error fetching employees:", error);
    }
  };
};
