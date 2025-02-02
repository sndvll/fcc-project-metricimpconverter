/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      assert.equal(convertHandler.getNum('32L'),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      assert.equal(convertHandler.getNum('3.2L'), 3.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      assert.equal(convertHandler.getNum('32/2L'), '32/2')
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      assert.equal(convertHandler.getNum('3.2/2L'), '3.2/2');
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      assert.strictEqual(convertHandler.getNum('2/2/2'), 'invalid');
      done();
    });
    
    test('No Numerical Input', function(done) {
      assert.strictEqual(convertHandler.getNum('noNum'), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit('20'+ele), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('45GaL'), 'invalid');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    const input = ['gal','l','mi','km','lbs','kg'];
    const expect = ['gallon','liter','mile','kilometer','pound','kilogram'];
    test('For Each Valid Unit Inputs', function(done) {
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      const input = [5, 'gal'];
      const expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      assert.approximately(convertHandler.convert(1, 'l'), 0.26417, 0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      assert.approximately(convertHandler.convert(1, 'mi'), 1.60934, 0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      assert.approximately(convertHandler.convert(1, 'km'), 0.62137, 0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      assert.approximately(convertHandler.convert(1, 'lbs'), 0.45359, 0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      assert.approximately(convertHandler.convert(1, 'kg'), 2.20462, 0.1);
      done();
    });
  });

});