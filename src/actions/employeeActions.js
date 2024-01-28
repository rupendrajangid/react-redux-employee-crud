import axios from "axios";

export const addEmployee = (employee) => ({
  type: "ADD_EMPLOYEE",
  payload: employee,
});

export const deleteEmployee = (id) => ({
  type: "DELETE_EMPLOYEE",
  payload: id,
});

export const updateEmployee = (employee) => ({
  type: "UPDATE_EMPLOYEE",
  payload: employee,
});

export const fetchEmployees = (employees) => ({
  type: "FETCH_EMPLOYEES",
  payload: employees,
});

export const fetchEmployeesAsync = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://your-api-url/employees");
      dispatch(fetchEmployees(response.data));
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
};
