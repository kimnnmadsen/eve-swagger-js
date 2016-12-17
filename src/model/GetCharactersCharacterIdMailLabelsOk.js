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
    define(['ApiClient', 'model/GetCharactersCharacterIdMailLabelsOkLabels'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdMailLabelsOkLabels'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdMailLabelsOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdMailLabelsOkLabels);
  }
}(this, function(ApiClient, GetCharactersCharacterIdMailLabelsOkLabels) {
  'use strict';




  /**
   * The GetCharactersCharacterIdMailLabelsOk model module.
   * @module model/GetCharactersCharacterIdMailLabelsOk
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMailLabelsOk</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdMailLabelsOk
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMailLabelsOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMailLabelsOk} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMailLabelsOk} The populated <code>GetCharactersCharacterIdMailLabelsOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], [GetCharactersCharacterIdMailLabelsOkLabels]);
      }
      if (data.hasOwnProperty('total_unread_count')) {
        obj['total_unread_count'] = ApiClient.convertToType(data['total_unread_count'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * labels array
   * @member {Array.<module:model/GetCharactersCharacterIdMailLabelsOkLabels>} labels
   */
  exports.prototype['labels'] = undefined;
  /**
   * total_unread_count integer
   * @member {Integer} total_unread_count
   */
  exports.prototype['total_unread_count'] = undefined;



  return exports;
}));


