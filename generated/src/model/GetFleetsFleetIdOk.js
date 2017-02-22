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
    root.EveSwaggerInterface.GetFleetsFleetIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetFleetsFleetIdOk model module.
   * @module model/GetFleetsFleetIdOk
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>GetFleetsFleetIdOk</code>.
   * 200 ok object
   * @alias module:model/GetFleetsFleetIdOk
   * @class
   * @param isFreeMove {Boolean} Is free-move enabled
   * @param isRegistered {Boolean} Does the fleet have an active fleet advertisement
   * @param isVoiceEnabled {Boolean} Is EVE Voice enabled
   * @param motd {String} Fleet MOTD in CCP flavoured HTML
   */
  var exports = function(isFreeMove, isRegistered, isVoiceEnabled, motd) {
    var _this = this;

    _this['is_free_move'] = isFreeMove;
    _this['is_registered'] = isRegistered;
    _this['is_voice_enabled'] = isVoiceEnabled;
    _this['motd'] = motd;
  };

  /**
   * Constructs a <code>GetFleetsFleetIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFleetsFleetIdOk} obj Optional instance to populate.
   * @return {module:model/GetFleetsFleetIdOk} The populated <code>GetFleetsFleetIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('is_free_move')) {
        obj['is_free_move'] = ApiClient.convertToType(data['is_free_move'], 'Boolean');
      }
      if (data.hasOwnProperty('is_registered')) {
        obj['is_registered'] = ApiClient.convertToType(data['is_registered'], 'Boolean');
      }
      if (data.hasOwnProperty('is_voice_enabled')) {
        obj['is_voice_enabled'] = ApiClient.convertToType(data['is_voice_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('motd')) {
        obj['motd'] = ApiClient.convertToType(data['motd'], 'String');
      }
    }
    return obj;
  }

  /**
   * Is free-move enabled
   * @member {Boolean} is_free_move
   */
  exports.prototype['is_free_move'] = undefined;
  /**
   * Does the fleet have an active fleet advertisement
   * @member {Boolean} is_registered
   */
  exports.prototype['is_registered'] = undefined;
  /**
   * Is EVE Voice enabled
   * @member {Boolean} is_voice_enabled
   */
  exports.prototype['is_voice_enabled'] = undefined;
  /**
   * Fleet MOTD in CCP flavoured HTML
   * @member {String} motd
   */
  exports.prototype['motd'] = undefined;



  return exports;
}));


