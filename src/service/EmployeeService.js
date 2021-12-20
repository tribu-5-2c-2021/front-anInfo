import axios from "axios";

class EmployeeService {
  static async getEmployees() {
        const response = await axios.get("https://squad1720212c.herokuapp.com/empleados");
        return response;
    }

    static async getEmployee(employeeID) {
        const response = await axios.get(`https://squad1720212c.herokuapp.com/empleados/${employeeID}`);
        return response;
    }
};

export default EmployeeService;
