function addCommas(num) {
  // Convert the number to a string
  let numStr = num.toString();
  
  // Use regex (regular expression) to add commas to the number string
  numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // Return the formatted number string
  return numStr;
}
//      \B: This is a negative look-behind assertion that matches a position that is not preceded by a word boundary. 
//In this case, it ensures that commas are not added at the beginning of the number string.

//      (?=(\d{3})+(?!\d)): This is a positive look-ahead assertion that matches a position followed by one or more groups of three digits
// not followed by another digit. This effectively identifies the positions where commas need to be added.

//      /g: This is a flag that indicates a global search because it needs to search for all occurrences of the pattern in the input string, rather than just the first occurrence.


module.exports = addCommas;