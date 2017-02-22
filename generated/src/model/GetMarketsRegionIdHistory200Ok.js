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
    root.EveSwaggerInterface.GetMarketsRegionIdHistory200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetMarketsRegionIdHistory200Ok model module.
   * @module model/GetMarketsRegionIdHistory200Ok
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetMarketsRegionIdHistory200Ok</code>.
   * 200 ok object
   * @alias module:model/GetMarketsRegionIdHistory200Ok
   * @class
   * @param average {Number} average number
   * @param _date {Date} The date of this historical statistic entry
   * @param highest {Number} highest number
   * @param lowest {Number} lowest number
   * @param orderCount {Integer} Total number of orders happened that day
   * @param volume {Integer} Total
   */
  var exports = function(average, _date, highest, lowest, orderCount, volume) {
    var _this = this;

    _this['average'] = average;
    _this['date'] = _date;
    _this['highest'] = highest;
    _this['lowest'] = lowest;
    _this['order_count'] = orderCount;
    _this['volume'] = volume;
  };

  /**
   * Constructs a <code>GetMarketsRegionIdHistory200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMarketsRegionIdHistory200Ok} obj Optional instance to populate.
   * @return {module:model/GetMarketsRegionIdHistory200Ok} The populated <code>GetMarketsRegionIdHistory200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('average')) {
        obj['average'] = ApiClient.convertToType(data['average'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('highest')) {
        obj['highest'] = ApiClient.convertToType(data['highest'], 'Number');
      }
      if (data.hasOwnProperty('lowest')) {
        obj['lowest'] = ApiClient.convertToType(data['lowest'], 'Number');
      }
      if (data.hasOwnProperty('order_count')) {
        obj['order_count'] = ApiClient.convertToType(data['order_count'], 'Integer');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * average number
   * @member {Number} average
   */
  exports.prototype['average'] = undefined;
  /**
   * The date of this historical statistic entry
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * highest number
   * @member {Number} highest
   */
  exports.prototype['highest'] = undefined;
  /**
   * lowest number
   * @member {Number} lowest
   */
  exports.prototype['lowest'] = undefined;
  /**
   * Total number of orders happened that day
   * @member {Integer} order_count
   */
  exports.prototype['order_count'] = undefined;
  /**
   * Total
   * @member {Integer} volume
   */
  exports.prototype['volume'] = undefined;



  return exports;
}));


