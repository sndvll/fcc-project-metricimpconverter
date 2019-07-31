/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  const convertHandler = new ConvertHandler();
  
  const middleWare = (req, res, next) => {
      const input = req.query.input,
      initNum = convertHandler.getNum(input),
      initUnit = convertHandler.getUnit(input);
    
      res.body = {
        initNum: convertHandler.getNum(input),
        initUnit: convertHandler.getUnit(input)
      };
    
      if(res.body.initNum !== 'invalid input' && res.body.initUnit !== 'invalid input') {
              var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      }
  }

  app.route('/api/convert')
    .get(middleWare, (req, res) => {
      
    
    

      //res.json
    });
    
};
