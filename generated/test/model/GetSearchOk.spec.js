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
    instance = new EveSwaggerInterface.GetSearchOk();
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

  describe('GetSearchOk', function() {
    it('should create an instance of GetSearchOk', function() {
      // uncomment below and update the code to test GetSearchOk
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetSearchOk);
    });

    it('should have the property agent (base name: "agent")', function() {
      // uncomment below and update the code to test the property agent
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property alliance (base name: "alliance")', function() {
      // uncomment below and update the code to test the property alliance
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property character (base name: "character")', function() {
      // uncomment below and update the code to test the property character
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property constellation (base name: "constellation")', function() {
      // uncomment below and update the code to test the property constellation
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property corporation (base name: "corporation")', function() {
      // uncomment below and update the code to test the property corporation
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property faction (base name: "faction")', function() {
      // uncomment below and update the code to test the property faction
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property inventorytype (base name: "inventorytype")', function() {
      // uncomment below and update the code to test the property inventorytype
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property solarsystem (base name: "solarsystem")', function() {
      // uncomment below and update the code to test the property solarsystem
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property station (base name: "station")', function() {
      // uncomment below and update the code to test the property station
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property wormhole (base name: "wormhole")', function() {
      // uncomment below and update the code to test the property wormhole
      //var instane = new EveSwaggerInterface.GetSearchOk();
      //expect(instance).to.be();
    });

  });

}));
