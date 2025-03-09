// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find matches based on the beginning letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function to find objects in an array where the name matches
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  