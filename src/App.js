import React from "react"; // Importing the React library

// Importing the EmployeeList and EmployeeForm components
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

// Functional component representing the main application
function App() {
  return (
    <div>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

// Exporting the App component
export default App;
