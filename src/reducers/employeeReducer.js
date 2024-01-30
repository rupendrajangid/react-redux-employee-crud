// Initial state for the employee reducer which contains an array to store employee information
const initialState = {
  employees: [],
};

// Reducer function to handle employee-related actions and updating the state
const employeeReducer = (state = initialState, action) => {
  // Switch statement
  switch (action.type) {
    // Case for adding a new employee
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload], // Adding the new employee to the existing array
      };
    // Case for deleting an employee by ID
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ), // Filtering out the deleted employee from the array
      };
    // Case for updating an employee information
    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ), // Updating the employee with matching ID or keeping the original if no match available
      };
    // Case for fetching employees and updating the state with the fetched data
    case "FETCH_EMPLOYEES":
      return {
        ...state,
        employees: action.payload, // Updating the state with the fetched array of employees
      };
    // Default case for handling unknown actions
    default:
      return state;
  }
};

// Exporting the employee reducer
export default employeeReducer;
