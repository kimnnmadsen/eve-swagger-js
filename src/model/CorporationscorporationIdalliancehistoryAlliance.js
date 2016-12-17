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
    root.EveSwaggerInterface.CorporationscorporationIdalliancehistoryAlliance = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CorporationscorporationIdalliancehistoryAlliance model module.
   * @module model/CorporationscorporationIdalliancehistoryAlliance
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new <code>CorporationscorporationIdalliancehistoryAlliance</code>.
   * alliance object
   * @alias module:model/CorporationscorporationIdalliancehistoryAlliance
   * @class
   * @param allianceId {Integer} alliance_id integer
   * @param isDeleted {Boolean} True if the alliance has been deleted
   */
  var exports = function(allianceId, isDeleted) {
    var _this = this;

    _this['alliance_id'] = allianceId;
    _this['is_deleted'] = isDeleted;
  };

  /**
   * Constructs a <code>CorporationscorporationIdalliancehistoryAlliance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CorporationscorporationIdalliancehistoryAlliance} obj Optional instance to populate.
   * @return {module:model/CorporationscorporationIdalliancehistoryAlliance} The populated <code>CorporationscorporationIdalliancehistoryAlliance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_id')) {
        obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'Integer');
      }
      if (data.hasOwnProperty('is_deleted')) {
        obj['is_deleted'] = ApiClient.convertToType(data['is_deleted'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * alliance_id integer
   * @member {Integer} alliance_id
   */
  exports.prototype['alliance_id'] = undefined;
  /**
   * True if the alliance has been deleted
   * @member {Boolean} is_deleted
   */
  exports.prototype['is_deleted'] = undefined;



  return exports;
}));


