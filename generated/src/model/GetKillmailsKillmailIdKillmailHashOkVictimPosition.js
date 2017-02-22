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
    root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashOkVictimPosition = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetKillmailsKillmailIdKillmailHashOkVictimPosition model module.
   * @module model/GetKillmailsKillmailIdKillmailHashOkVictimPosition
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetKillmailsKillmailIdKillmailHashOkVictimPosition</code>.
   * Coordinates of the victim in Cartesian space relative to the Sun 
   * @alias module:model/GetKillmailsKillmailIdKillmailHashOkVictimPosition
   * @class
   * @param x {Number} x number
   * @param y {Number} y number
   * @param z {Number} z number
   */
  var exports = function(x, y, z) {
    var _this = this;

    _this['x'] = x;
    _this['y'] = y;
    _this['z'] = z;
  };

  /**
   * Constructs a <code>GetKillmailsKillmailIdKillmailHashOkVictimPosition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetKillmailsKillmailIdKillmailHashOkVictimPosition} obj Optional instance to populate.
   * @return {module:model/GetKillmailsKillmailIdKillmailHashOkVictimPosition} The populated <code>GetKillmailsKillmailIdKillmailHashOkVictimPosition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('x')) {
        obj['x'] = ApiClient.convertToType(data['x'], 'Number');
      }
      if (data.hasOwnProperty('y')) {
        obj['y'] = ApiClient.convertToType(data['y'], 'Number');
      }
      if (data.hasOwnProperty('z')) {
        obj['z'] = ApiClient.convertToType(data['z'], 'Number');
      }
    }
    return obj;
  }

  /**
   * x number
   * @member {Number} x
   */
  exports.prototype['x'] = undefined;
  /**
   * y number
   * @member {Number} y
   */
  exports.prototype['y'] = undefined;
  /**
   * z number
   * @member {Number} z
   */
  exports.prototype['z'] = undefined;



  return exports;
}));


