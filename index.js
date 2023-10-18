// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 1);
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}
  function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  }
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers ,returnlastTwoDrivers){
 return returnLastTwoDrivers(drivers);
}

