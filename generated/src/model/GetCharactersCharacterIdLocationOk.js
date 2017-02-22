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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdLocationOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdLocationOk model module.
   * @module model/GetCharactersCharacterIdLocationOk
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdLocationOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdLocationOk
   * @class
   * @param solarSystemId {Integer} solar_system_id integer
   */
  var exports = function(solarSystemId) {
    var _this = this;

    _this['solar_system_id'] = solarSystemId;


  };

  /**
   * Constructs a <code>GetCharactersCharacterIdLocationOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdLocationOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdLocationOk} The populated <code>GetCharactersCharacterIdLocationOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('solar_system_id')) {
        obj['solar_system_id'] = ApiClient.convertToType(data['solar_system_id'], 'Integer');
      }
      if (data.hasOwnProperty('station_id')) {
        obj['station_id'] = ApiClient.convertToType(data['station_id'], 'Integer');
      }
      if (data.hasOwnProperty('structure_id')) {
        obj['structure_id'] = ApiClient.convertToType(data['structure_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * solar_system_id integer
   * @member {Integer} solar_system_id
   */
  exports.prototype['solar_system_id'] = undefined;
  /**
   * station_id integer
   * @member {Integer} station_id
   */
  exports.prototype['station_id'] = undefined;
  /**
   * structure_id integer
   * @member {Integer} structure_id
   */
  exports.prototype['structure_id'] = undefined;



  return exports;
}));


