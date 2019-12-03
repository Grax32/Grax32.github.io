"use strict";

var paycheckInput = (function(employeeData) {
  let inputSection;
  let inProgressDependents = [];
  let inProgressEmployee = {};
  let paycheckRender;
  let paycheckData;

  function init(data, render) {
    paycheckRender = render;
    paycheckData = data;

    inputSection = document.getElementsByClassName("input")[0];

    addEventListener(
      document.getElementById("addDependent"),
      "click",
      addDependent
    );
    addEventListener(
      document.getElementById("editEmployeeSave"),
      "click",
      editEmployeeSave
    );
    addEventListener(document.getElementsByTagName("form"), "submit", () => {});
  }

  function editEmployeeSave() {
    addDependent();

    const id = inProgressEmployee.id || employeeData.getNextId();

    const employee = {
      id: id,
      name: getNamedValue("name"),
      dependents: inProgressDependents
    };

    paycheckData.add(employee);
    clearEntry();

    paycheckRender.renderEmployees();
  }

  function clearEntry() {
    inProgressDependents = [];
    inProgressEmployee = {};
    setNamedValue("name", "");
    setNamedValue("dependent-name", "");
    renderDependents();
  }

  function addDependent() {
    const dependentName = getNamedValue("dependent-name");

    if (dependentName) {
      inProgressDependents = [
        ...inProgressDependents,
        {
          name: dependentName
        }
      ];
    }

    setNamedValue("dependent-name", "");

    renderDependents();
  }

  function setNamedValue(name, value) {
    inputSection.getElementsByClassName(name)[0].value = value;
  }

  function getNamedValue(name) {
    return inputSection.getElementsByClassName(name)[0].value;
  }

  function setValues(employee) {
    setNamedValue("name", employee.name);
    inProgressDependents = employee.dependents;
    inProgressEmployee = employee;

    renderDependents();
  }

  function renderDependents() {
    const dependentsSection = inputSection.getElementsByClassName(
      "dependents"
    )[0];
    dependentsSection.innerHTML = "";

    for (const dependent of inProgressDependents) {
      var dep = document.createElement("div");
      dep.innerHTML = dependent.name;
      dependentsSection.appendChild(dep);
    }
  }

  return {
    setValues: setValues,
    init: init
  };
})(employeeData);
