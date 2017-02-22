/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.4.1.dev1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.GetAlliancesAllianceIdOk();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetAlliancesAllianceIdOk', function() {
    it('should create an instance of GetAlliancesAllianceIdOk', function() {
      // uncomment below and update the code to test GetAlliancesAllianceIdOk
      //var instane = new EveSwaggerInterface.GetAlliancesAllianceIdOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetAlliancesAllianceIdOk);
    });

    it('should have the property allianceName (base name: "alliance_name")', function() {
      // uncomment below and update the code to test the property allianceName
      //var instane = new EveSwaggerInterface.GetAlliancesAllianceIdOk();
      //expect(instance).to.be();
    });

    it('should have the property dateFounded (base name: "date_founded")', function() {
      // uncomment below and update the code to test the property dateFounded
      //var instane = new EveSwaggerInterface.GetAlliancesAllianceIdOk();
      //expect(instance).to.be();
    });

    it('should have the property executorCorp (base name: "executor_corp")', function() {
      // uncomment below and update the code to test the property executorCorp
      //var instane = new EveSwaggerInterface.GetAlliancesAllianceIdOk();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new EveSwaggerInterface.GetAlliancesAllianceIdOk();
      //expect(instance).to.be();
    });

  });

}));
