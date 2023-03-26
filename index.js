// Write your solution in this file!
let employee = {
    name: 'Theophilus Mensah',
    streetAddress: 'Robson Street, Vancouver, British Columbia'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
