'use strict';





var paycheckInput = (function (employeeData) {
    let inputSection;
    let inProgressDependents = [];
    let inProgressEmployee;

    function init() {
        inputSection = document.getElementsByClassName("input")[0];

        addEventListener(document.getElementById("addDependent"), "click", addDependent);
        addEventListener(document.getElementById("editEmployeeSave"), "click", editEmployeeSave);
        addEventListener(document.getElementsByTagName("form"), "submit", () => { });
    }

    function editEmployeeSave() {
        const id = inProgressEmployee.id || employeeData.getNextId();

        const employee = {
            id: id,
            name: getNamedValue("name"),
            dependents: inProgressDependents
        };

        employeeData.add(employee);
        clearEntry();
    }

    function clearEntry() {
        inProgressDependents = [];
        inProgressEmployee = null;
        setNamedValue("name", "");
        setNamedValue("dependent-name", "");
        renderDependents();
    }

    function addDependent() {
        const dependentName = getNamedValue("dependent-name");
        if (dependentName) {
            inProgressDependents = [...inProgressDependents, {
                "name": dependentName
            }];
        }
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
        const dependentsSection = inputSection.getElementsByClassName("dependents")[0];
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

var paycheckRender = (function () {
    let employeeSection;
    let employeeTemplate;

    function init(data) {
        employeeSection = document.getElementsByClassName("employees")[0];
        employeeTemplate = document.getElementsByClassName("employee-template")[0];

        renderEmployees(data.list);
    }

    function renderEmployees(employeeList) {
        for (const employee of employeeList) {
            renderEmployee(employee);
        }
    }

    function renderEmployee(employee) {
        const employeeNode = employeeTemplate.cloneNode(true);
        employeeNode.classList.remove("employee-template");
        employeeNode.classList.add("employee");

        employeeNode.data = employee;
        setValue(employeeNode, "name", employee.name);
        setValue(employeeNode, "dependents", employee.dependents.length + " dependents");
        setValue(employeeNode, "paycheck", "$" + paycheckAmount);

        addEventListener(employeeNode.getElementsByClassName("edit-button"), "click", editEmployee);
        addEventListener(employeeNode.getElementsByClassName("delete-button"), "click", deleteEmployee);

        employeeSection.appendChild(employeeNode);
    }

    return {
        init: init
    };
})();

var paycheckPreviewApp = (function (employeeData, input, render) {

    const payPeriodsPerYear = 26.0;

    function editEmployee(event) {
        const employee = event.toElement.closest(".employee").data;

        employeeData.delete(employee.id);
        render.renderEmployees();
        input.setValues(employee);
    }

    function deleteEmployee(event) {
        const employee = event.toElement.closest(".employee").data;
        employeeData.delete(employee.id);
        render.renderEmployees();
    }

    function loadEmployee(employee) {
        const employeeNode = employeeTemplate.cloneNode(true);
        employeeNode.classList.remove("employee-template");
        employeeNode.classList.add("employee");

        const yearly =
            getEmployeeSalary(employee)
            - getBenefitCostForEmployee(employee)
            - getBenefitCostForDependents(employee);

        const paycheckAmount = (yearly / payPeriodsPerYear).toFixed(2);

        render.render
    }

    function getEmployeeSalary(employee) {
        return 52000;
    }

    function getBenefitCostForEmployee(employee) {
        var cost = 1000;
        var discount = getDiscountForIndividual(employee);

        return (1 - discount) * cost;
    }

    function getBenefitCostForDependents(employee) {
        var total = 0;
        for (const dependent of employee.dependents) {
            var cost = getBenefitCostForDependent(dependent);
            var discount = getDiscountForIndividual(dependent);

            total += (1 - discount) * cost;
        }
        return total;
    }

    function getBenefitCostForDependent(dependent) {
        return 500;
    }

    function getDiscountForIndividual(individual) {
        if (individual.name.toLowerCase().startsWith("a")) {
            return .1;
        } else {
            return 0;
        }
    }


    return {
        init: init
    };
})(employeeData, paycheckInput, paycheckRender);
