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
    const result = input.slice(0, index);
    const secFraction = result.indexOf('/', result.indexOf('/') + 1);
    return secFraction > 0 ? 'invalid' : result;
  };
  
  this.getUnit = function(input) {
    const units = ['kg', 'KG', 'km', 'KM', 'l', 'L', 'gal', 'GAL', 'mi', 'MI', 'lbs', 'LBS'];
    const index = getFirstLetterIndex(input);
    if (index < 0) {
      return 'invalid'
    }
    const unit = input.slice(index);
    return units.includes(unit) ? unit : 'invalid';
  };
  
  this.getReturnUnit = function(initUnit) {    
    return {
      gal: 'l',
      l: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs'
    }[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    return {
      gal: 'gallon',
      l: 'liter',
      mi: 'mile',
      km: 'kilometer',
      lbs: 'pound',
      kg: 'kilogram'
    }[unit.toLowerCase()];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const converter = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg
    };    
    return Math.round(initNum * converter[initUnit.toLowerCase()] * 10**5) / 10**5;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)}s converts to ${returnNum} ${this.spellOutUnit(returnUnit)}s`;
  };
  
}

module.exports = ConvertHandler;
