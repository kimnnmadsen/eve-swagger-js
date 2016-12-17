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
    root.EveSwaggerInterface.GetAlliancesAllianceIdIconsOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAlliancesAllianceIdIconsOk model module.
   * @module model/GetAlliancesAllianceIdIconsOk
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new <code>GetAlliancesAllianceIdIconsOk</code>.
   * 200 ok object
   * @alias module:model/GetAlliancesAllianceIdIconsOk
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetAlliancesAllianceIdIconsOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAlliancesAllianceIdIconsOk} obj Optional instance to populate.
   * @return {module:model/GetAlliancesAllianceIdIconsOk} The populated <code>GetAlliancesAllianceIdIconsOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('px128x128')) {
        obj['px128x128'] = ApiClient.convertToType(data['px128x128'], 'String');
      }
      if (data.hasOwnProperty('px64x64')) {
        obj['px64x64'] = ApiClient.convertToType(data['px64x64'], 'String');
      }
    }
    return obj;
  }

  /**
   * px128x128 string
   * @member {String} px128x128
   */
  exports.prototype['px128x128'] = undefined;
  /**
   * px64x64 string
   * @member {String} px64x64
   */
  exports.prototype['px64x64'] = undefined;



  return exports;
}));


