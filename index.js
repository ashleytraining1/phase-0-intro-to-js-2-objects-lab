// Write your solution in this file!

const employee = {
    name : "Ashley",
    streetAddress : "1234"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
  
  const newEmployee = { ...employee };

  newEmployee[key] = value;

  return newEmployee;

  
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

  employee[key] = value;

  return employee;
}
function deleteFromEmployeeByKey(employee,key,value){

  const fromEmployee = { ... employee };

  fromEmployee[key] = value;

  delete fromEmployee.key;

  return fromEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
  employee[key] = value;

  delete employee.key;

  return employee;
}
