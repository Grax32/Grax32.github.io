"use strict";

const paycheckRender = (function() {
  let employeeSection;
  let employeeTemplate;
  let paycheckCalculate;
  let paycheckInput;
  let paycheckData;

  function init(data, input, calculate) {
    paycheckCalculate = calculate;
    paycheckInput = input;
    paycheckData = data;

    employeeSection = document.getElementsByClassName("employees")[0];
    employeeTemplate = document.getElementsByClassName("employee-template")[0];

    renderEmployees();
  }

  function renderEmployees() {
    employeeSection.innerHTML="";
    for (const employee of paycheckData.list()) {
      renderEmployee(employee);
    }
  }

  function setValue(node, name, value) {
    node.getElementsByClassName(name)[0].innerHTML = value;
  }

  function renderEmployee(employee) {
    const employeeNode = employeeTemplate.cloneNode(true);
    employeeNode.classList.remove("employee-template");
    employeeNode.classList.add("employee");

    const paycheckAmount = paycheckCalculate.calculateEmployee(employee).paycheckAmount;

    employeeNode.data = employee;

    setValue(employeeNode, "name", employee.name);
    setValue(
      employeeNode,
      "dependents",
      employee.dependents.length + " dependents"
    );
    setValue(employeeNode, "paycheck", "$" + paycheckAmount);

    function editEmployee() {
      paycheckData.delete(employee.id);
      paycheckInput.setValues(employee);
      renderEmployees();
    }

    function deleteEmployee() {
      paycheckData.delete(employee.id);
      renderEmployees();
    }

    addEventListener(
      employeeNode.getElementsByClassName("edit-button"),
      "click",
      editEmployee
    );
    addEventListener(
      employeeNode.getElementsByClassName("delete-button"),
      "click",
      deleteEmployee
    );

    employeeSection.appendChild(employeeNode);
  }

  return {
    init: init,
    renderEmployees: renderEmployees
  };
})();
