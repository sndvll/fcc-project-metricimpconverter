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
      res.body = {};
      res.body = {
        initNum: convertHandler.getNum(req.query.input),
        initUnit: convertHandler.getUnit(req.query.input)
      };
    
      if(res.body.initNum !== 'invalid input' && res.body.initUnit !== 'invalid input') {
        const { initNum, initUnit } = res.body;
        res.body.returnNum = convertHandler.convert(initNum, initUnit);
        res.body.returnUnit = convertHandler.getReturnUnit(res.body.initUnit);
        const { returnNum, returnUnit } = res.body;
        res.body.string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      }
    next();
  }

  app.route('/api/convert')
    .get(middleWare, (req, res) => {
      let response;
      console.log('body', res.body);
      if(res.body.initNum === 'invalid input' && res.body.initUnit === 'invalid input') {
        response = {...res.body, string: 'invalid number and unit' };
      } else if (res.body.initNum === 'invalid input') {
        response = {...res.body, string: 'ivalid number' };
      } else if (res.body.initUnit === 'invalid input') {
        response = {...res.body, string: 'invalid unit' };
      } else {
        response = {
          initNum: res.body.initNum,
          initUnit: res.body.initUnit,
          returnNum: res.body.returnNum,
          returnUnit: res.body.returnUnit,
          string: res.body.string
        }
      }
      console.log('response',response);
      res.status(200).json(response);
    });
    
};
