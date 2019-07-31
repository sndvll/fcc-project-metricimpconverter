/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const getFirstLetterIndex = (input) => {
    return input.indexOf(input.match(/[a-zA-Z]/));
  }
  
  this.getNum = function(input) {
    const index = getFirstLetterIndex(input);
    if(index == 0) {
      return 1;
    }
    let result = input.slice(0, index);
    const secFraction = result.indexOf('/', result.indexOf('/') + 1);
    if(secFraction > 0) {
      result = 'invalid input';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
