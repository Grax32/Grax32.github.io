'use strict';

var paycheckData = (function () {

    return {
        delete: {},
        add: {}
    };
})();

var paycheckRender = (function () {
    let inputSection;
    let employeeSection;
    let employeeTemplate;

    function init(data) {
        employeeData = data;

        inputSection = document.getElementsByClassName("input")[0];
        employeeSection = document.getElementsByClassName("employees")[0];

        employeeTemplate = document.getElementsByClassName("employee-template")[0];

        loadEmployeeList(data.employees);

        addEventListener(document.getElementById("addDependent"), "click", addDependent);
        addEventListener(document.getElementById("editEmployeeSave"), "click", editEmployeeSave);
        addEventListener(document.getElementsByTagName("form"), "submit", () => { });
    }

})();

var paycheckPreviewApp = (function () {

    const payPeriodsPerYear = 26.0;
    let employeeData;
    let inProgressDependents = [];


    function addEventListener(target, eventName, handler) {
        if (target) {
            if (HTMLCollection.prototype.isPrototypeOf(target)) {
                for (const targetItem of target) {
                    targetItem.addEventListener(eventName, handler);
                }
            } else {
                target.addEventListener(eventName, handler);
            }
        }
    }

    function editEmployee(event) {
        const employee = event.toElement.closest(".employee").data;
        employeeData.employees = employeeData.employees.filter(v => v.id !== employee.id);

        loadEmployeeList(employeeData.employees);

        document.getElementsByClassName("input")[0].getElementsByClassName("name")[0].value = employee.name;
        inProgressDependents = employee.dependents;
        renderDependents(inProgressDependents);
    }

    function deleteEmployee(event) {
        const employee = event.toElement.closest(".employee").data;
        employeeData.employees = employeeData.employees.filter(v => v.id !== employee.id);

        loadEmployeeList(employeeData.employees);
    }

    function addDependent() {
        const name = getInputValue(inputSection, "dependent-name");

        if (!name) {
            return;
        }

        inProgressDependents.push({
            "name": name
        });

        renderDependents(inProgressDependents);

        inputSection.getElementsByClassName("employee-data dependent-name")[0].value = "";
    }

    function renderDependents(dependents) {
        const dependentsSection = inputSection.getElementsByClassName("dependents")[0];
        dependentsSection.innerHTML = "";

        for (const dependent of dependents) {
            var dep = document.createElement("div");
            dep.innerHTML = dependent.name;
            dependentsSection.appendChild(dep);
        }
    }

    function editEmployeeSave() {
        addDependent();
            
        const name = getInputValue(inputSection, "name"); 
        if (!name) {
            return;
        }

        employeeData.employees.push({
            "name": name,
            "dependents": inProgressDependents
        });

        clearNewEmployeeForm();

        loadEmployeeList(employeeData.employees);
    }

    function clearNewEmployeeForm() {
        inProgressDependents = [];
        inputSection.getElementsByClassName("dependents")[0].innerHTML = "";
        for (const node of inputSection.getElementsByClassName("employee-data")) {
            node.value = "";
        }
    }

    function loadEmployeeList(employeeData) {
        employeeSection.innerHTML = "";

        for (const employee of employeeData) {
            loadEmployee(employee);
        }
    }

    function setValue(parentNode, propertyName, propertyValue) {
        for (const node of parentNode.getElementsByClassName(propertyName)) {
            node.innerText = propertyValue;
        }
    }

    function getInputValue(parentNode, propertyName) {
        return parentNode.getElementsByClassName(propertyName)[0].value;
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

        employeeNode.data = employee;
        setValue(employeeNode, "name", employee.name);
        setValue(employeeNode, "dependents", employee.dependents.length + " dependents");
        setValue(employeeNode, "paycheck", "$" + paycheckAmount);

        addEventListener(employeeNode.getElementsByClassName("edit-button"), "click", editEmployee);
        addEventListener(employeeNode.getElementsByClassName("delete-button"), "click", deleteEmployee);

        employeeSection.appendChild(employeeNode);
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
})();
