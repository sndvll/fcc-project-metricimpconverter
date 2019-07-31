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
    
      if(res.body.initNum !== 'invalid' && res.body.initUnit !== 'invalid') {
        res.body.returnNum = convertHandler.convert(res.body.initNum, res.body.initUnit);
        res.body.returnUnit = convertHandler.getReturnUnit(res.body.initUnit);
        res.body.string = convertHandler.getString(res.body);
      }
    next();
  }

  app.route('/api/convert')
    .get(middleWare, (req, res) => {
      try {
        let response;
        if(res.body.initNum === 'invalid' && res.body.initUnit === 'invalid') {
          response = { ...res.body, string: 'invalid number and unit' };
        } else if (res.body.initNum === 'invalid') {
          response = { ...res.body, string: 'ivalid number' };
        } else if (res.body.initUnit === 'invalid') {
          response = { ...res.body, string: 'invalid unit' };
        } else {
          response = res.body;
        }
        res.status(200).json(response);
      } catch (err) {
        console.log('error: ' + err)
      }
    });
    
};
