/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.2.dev3
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
    root.EveSwaggerInterface.GetMarketsRegionIdOrders200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetMarketsRegionIdOrders200Ok model module.
   * @module model/GetMarketsRegionIdOrders200Ok
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new <code>GetMarketsRegionIdOrders200Ok</code>.
   * 200 ok object
   * @alias module:model/GetMarketsRegionIdOrders200Ok
   * @class
   * @param duration {Integer} duration integer
   * @param isBuyOrder {Boolean} is_buy_order boolean
   * @param issued {Date} issued string
   * @param locationId {Integer} location_id integer
   * @param minVolume {Integer} min_volume integer
   * @param orderId {Integer} order_id integer
   * @param price {Number} price number
   * @param range {module:model/GetMarketsRegionIdOrders200Ok.RangeEnum} range string
   * @param typeId {Integer} type_id integer
   * @param volumeRemain {Integer} volume_remain integer
   * @param volumeTotal {Integer} volume_total integer
   */
  var exports = function(duration, isBuyOrder, issued, locationId, minVolume, orderId, price, range, typeId, volumeRemain, volumeTotal) {
    var _this = this;

    _this['duration'] = duration;
    _this['is_buy_order'] = isBuyOrder;
    _this['issued'] = issued;
    _this['location_id'] = locationId;
    _this['min_volume'] = minVolume;
    _this['order_id'] = orderId;
    _this['price'] = price;
    _this['range'] = range;
    _this['type_id'] = typeId;
    _this['volume_remain'] = volumeRemain;
    _this['volume_total'] = volumeTotal;
  };

  /**
   * Constructs a <code>GetMarketsRegionIdOrders200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMarketsRegionIdOrders200Ok} obj Optional instance to populate.
   * @return {module:model/GetMarketsRegionIdOrders200Ok} The populated <code>GetMarketsRegionIdOrders200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('is_buy_order')) {
        obj['is_buy_order'] = ApiClient.convertToType(data['is_buy_order'], 'Boolean');
      }
      if (data.hasOwnProperty('issued')) {
        obj['issued'] = ApiClient.convertToType(data['issued'], 'Date');
      }
      if (data.hasOwnProperty('location_id')) {
        obj['location_id'] = ApiClient.convertToType(data['location_id'], 'Integer');
      }
      if (data.hasOwnProperty('min_volume')) {
        obj['min_volume'] = ApiClient.convertToType(data['min_volume'], 'Integer');
      }
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Integer');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('range')) {
        obj['range'] = ApiClient.convertToType(data['range'], 'String');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Integer');
      }
      if (data.hasOwnProperty('volume_remain')) {
        obj['volume_remain'] = ApiClient.convertToType(data['volume_remain'], 'Integer');
      }
      if (data.hasOwnProperty('volume_total')) {
        obj['volume_total'] = ApiClient.convertToType(data['volume_total'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * duration integer
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * is_buy_order boolean
   * @member {Boolean} is_buy_order
   */
  exports.prototype['is_buy_order'] = undefined;
  /**
   * issued string
   * @member {Date} issued
   */
  exports.prototype['issued'] = undefined;
  /**
   * location_id integer
   * @member {Integer} location_id
   */
  exports.prototype['location_id'] = undefined;
  /**
   * min_volume integer
   * @member {Integer} min_volume
   */
  exports.prototype['min_volume'] = undefined;
  /**
   * order_id integer
   * @member {Integer} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * price number
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * range string
   * @member {module:model/GetMarketsRegionIdOrders200Ok.RangeEnum} range
   */
  exports.prototype['range'] = undefined;
  /**
   * type_id integer
   * @member {Integer} type_id
   */
  exports.prototype['type_id'] = undefined;
  /**
   * volume_remain integer
   * @member {Integer} volume_remain
   */
  exports.prototype['volume_remain'] = undefined;
  /**
   * volume_total integer
   * @member {Integer} volume_total
   */
  exports.prototype['volume_total'] = undefined;


  /**
   * Allowed values for the <code>range</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RangeEnum = {
    /**
     * value: "station"
     * @const
     */
    "station": "station",
    /**
     * value: "region"
     * @const
     */
    "region": "region",
    /**
     * value: "solarsystem"
     * @const
     */
    "solarsystem": "solarsystem",
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "3"
     * @const
     */
    "3": "3",
    /**
     * value: "4"
     * @const
     */
    "4": "4",
    /**
     * value: "5"
     * @const
     */
    "5": "5",
    /**
     * value: "10"
     * @const
     */
    "10": "10",
    /**
     * value: "20"
     * @const
     */
    "20": "20",
    /**
     * value: "30"
     * @const
     */
    "30": "30",
    /**
     * value: "40"
     * @const
     */
    "40": "40"  };


  return exports;
}));


