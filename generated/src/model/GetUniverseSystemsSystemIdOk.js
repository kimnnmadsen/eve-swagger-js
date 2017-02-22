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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetUniverseSystemsSystemIdOkPlanets', 'model/GetUniverseSystemsSystemIdOkPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniverseSystemsSystemIdOkPlanets'), require('./GetUniverseSystemsSystemIdOkPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseSystemsSystemIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseSystemsSystemIdOkPlanets, root.EveSwaggerInterface.GetUniverseSystemsSystemIdOkPosition);
  }
}(this, function(ApiClient, GetUniverseSystemsSystemIdOkPlanets, GetUniverseSystemsSystemIdOkPosition) {
  'use strict';




  /**
   * The GetUniverseSystemsSystemIdOk model module.
   * @module model/GetUniverseSystemsSystemIdOk
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetUniverseSystemsSystemIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseSystemsSystemIdOk
   * @class
   * @param constellationId {Integer} The constellation this solar system is in
   * @param name {String} name string
   * @param planets {Array.<module:model/GetUniverseSystemsSystemIdOkPlanets>} planets array
   * @param securityStatus {Number} security_status number
   * @param stargates {Array.<Integer>} stargates array
   * @param systemId {Integer} system_id integer
   */
  var exports = function(constellationId, name, planets, securityStatus, stargates, systemId) {
    var _this = this;

    _this['constellation_id'] = constellationId;
    _this['name'] = name;
    _this['planets'] = planets;


    _this['security_status'] = securityStatus;
    _this['stargates'] = stargates;
    _this['system_id'] = systemId;
  };

  /**
   * Constructs a <code>GetUniverseSystemsSystemIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseSystemsSystemIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseSystemsSystemIdOk} The populated <code>GetUniverseSystemsSystemIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('constellation_id')) {
        obj['constellation_id'] = ApiClient.convertToType(data['constellation_id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('planets')) {
        obj['planets'] = ApiClient.convertToType(data['planets'], [GetUniverseSystemsSystemIdOkPlanets]);
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = GetUniverseSystemsSystemIdOkPosition.constructFromObject(data['position']);
      }
      if (data.hasOwnProperty('security_class')) {
        obj['security_class'] = ApiClient.convertToType(data['security_class'], 'String');
      }
      if (data.hasOwnProperty('security_status')) {
        obj['security_status'] = ApiClient.convertToType(data['security_status'], 'Number');
      }
      if (data.hasOwnProperty('stargates')) {
        obj['stargates'] = ApiClient.convertToType(data['stargates'], ['Integer']);
      }
      if (data.hasOwnProperty('system_id')) {
        obj['system_id'] = ApiClient.convertToType(data['system_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The constellation this solar system is in
   * @member {Integer} constellation_id
   */
  exports.prototype['constellation_id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * planets array
   * @member {Array.<module:model/GetUniverseSystemsSystemIdOkPlanets>} planets
   */
  exports.prototype['planets'] = undefined;
  /**
   * @member {module:model/GetUniverseSystemsSystemIdOkPosition} position
   */
  exports.prototype['position'] = undefined;
  /**
   * security_class string
   * @member {String} security_class
   */
  exports.prototype['security_class'] = undefined;
  /**
   * security_status number
   * @member {Number} security_status
   */
  exports.prototype['security_status'] = undefined;
  /**
   * stargates array
   * @member {Array.<Integer>} stargates
   */
  exports.prototype['stargates'] = undefined;
  /**
   * system_id integer
   * @member {Integer} system_id
   */
  exports.prototype['system_id'] = undefined;



  return exports;
}));


