"use strict";

const employeeData = (function () {
    let employeeData = initialData;

    function deleteEmployee(id) {
        employeeData.employees = employeeData.employees.filter(v => v.id !== id);
    }

    function addEmployee(employee) {
        employeeData.employees = [...employeeData.employees, employee];
    }

    function list() {
        return employeeData.employees;
    }

    function getNextId() {
        var max = employeeData.employees.map(v => v.id).reduce(function (a, b) {
            return Math.max(a, b);
        });

        return (max || 0) + 1;
    }

    return {
        list: list,
        delete: deleteEmployee,
        add: addEmployee,
        getNextId: getNextId
    };
})(initialData);
