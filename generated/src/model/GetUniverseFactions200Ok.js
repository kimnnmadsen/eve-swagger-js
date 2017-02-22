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
    root.EveSwaggerInterface.GetUniverseFactions200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUniverseFactions200Ok model module.
   * @module model/GetUniverseFactions200Ok
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetUniverseFactions200Ok</code>.
   * 200 ok object
   * @alias module:model/GetUniverseFactions200Ok
   * @class
   * @param corporationId {Integer} corporation_id integer
   * @param description {String} description string
   * @param factionId {Integer} faction_id integer
   * @param isUnique {Boolean} is_unique boolean
   * @param name {String} name string
   * @param sizeFactor {Number} size_factor number
   * @param solarSystemId {Integer} solar_system_id integer
   * @param stationCount {Integer} station_count integer
   * @param stationSystemCount {Integer} station_system_count integer
   */
  var exports = function(corporationId, description, factionId, isUnique, name, sizeFactor, solarSystemId, stationCount, stationSystemCount) {
    var _this = this;

    _this['corporation_id'] = corporationId;
    _this['description'] = description;
    _this['faction_id'] = factionId;
    _this['is_unique'] = isUnique;

    _this['name'] = name;
    _this['size_factor'] = sizeFactor;
    _this['solar_system_id'] = solarSystemId;
    _this['station_count'] = stationCount;
    _this['station_system_count'] = stationSystemCount;
  };

  /**
   * Constructs a <code>GetUniverseFactions200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseFactions200Ok} obj Optional instance to populate.
   * @return {module:model/GetUniverseFactions200Ok} The populated <code>GetUniverseFactions200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('corporation_id')) {
        obj['corporation_id'] = ApiClient.convertToType(data['corporation_id'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('faction_id')) {
        obj['faction_id'] = ApiClient.convertToType(data['faction_id'], 'Integer');
      }
      if (data.hasOwnProperty('is_unique')) {
        obj['is_unique'] = ApiClient.convertToType(data['is_unique'], 'Boolean');
      }
      if (data.hasOwnProperty('militia_corporation_id')) {
        obj['militia_corporation_id'] = ApiClient.convertToType(data['militia_corporation_id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('size_factor')) {
        obj['size_factor'] = ApiClient.convertToType(data['size_factor'], 'Number');
      }
      if (data.hasOwnProperty('solar_system_id')) {
        obj['solar_system_id'] = ApiClient.convertToType(data['solar_system_id'], 'Integer');
      }
      if (data.hasOwnProperty('station_count')) {
        obj['station_count'] = ApiClient.convertToType(data['station_count'], 'Integer');
      }
      if (data.hasOwnProperty('station_system_count')) {
        obj['station_system_count'] = ApiClient.convertToType(data['station_system_count'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * corporation_id integer
   * @member {Integer} corporation_id
   */
  exports.prototype['corporation_id'] = undefined;
  /**
   * description string
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * faction_id integer
   * @member {Integer} faction_id
   */
  exports.prototype['faction_id'] = undefined;
  /**
   * is_unique boolean
   * @member {Boolean} is_unique
   */
  exports.prototype['is_unique'] = undefined;
  /**
   * militia_corporation_id integer
   * @member {Integer} militia_corporation_id
   */
  exports.prototype['militia_corporation_id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * size_factor number
   * @member {Number} size_factor
   */
  exports.prototype['size_factor'] = undefined;
  /**
   * solar_system_id integer
   * @member {Integer} solar_system_id
   */
  exports.prototype['solar_system_id'] = undefined;
  /**
   * station_count integer
   * @member {Integer} station_count
   */
  exports.prototype['station_count'] = undefined;
  /**
   * station_system_count integer
   * @member {Integer} station_system_count
   */
  exports.prototype['station_system_count'] = undefined;



  return exports;
}));


