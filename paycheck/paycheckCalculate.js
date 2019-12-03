"use strict";

const paycheckCalculate = (function() {
  const payPeriodsPerYear = 26.0;

  function calculateEmployee(employee) {
    const yearly =
      getEmployeeSalary(employee) -
      getBenefitCostForEmployee(employee) -
      getBenefitCostForDependents(employee);

    const paycheckAmount = (yearly / payPeriodsPerYear).toFixed(2);

    return {
      employee: employee,
      paycheckAmount: paycheckAmount
    };
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
      return 0.1;
    } else {
      return 0;
    }
  }

  return { calculateEmployee: calculateEmployee };
})();
