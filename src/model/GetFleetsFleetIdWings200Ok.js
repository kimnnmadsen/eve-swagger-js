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
    define(['ApiClient', 'model/FleetsfleetIdwingsSquads'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FleetsfleetIdwingsSquads'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFleetsFleetIdWings200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.FleetsfleetIdwingsSquads);
  }
}(this, function(ApiClient, FleetsfleetIdwingsSquads) {
  'use strict';




  /**
   * The GetFleetsFleetIdWings200Ok model module.
   * @module model/GetFleetsFleetIdWings200Ok
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new <code>GetFleetsFleetIdWings200Ok</code>.
   * 200 ok object
   * @alias module:model/GetFleetsFleetIdWings200Ok
   * @class
   * @param id {Integer} id integer
   * @param name {String} name string
   * @param squads {Array.<module:model/FleetsfleetIdwingsSquads>} squads array
   */
  var exports = function(id, name, squads) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['squads'] = squads;
  };

  /**
   * Constructs a <code>GetFleetsFleetIdWings200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFleetsFleetIdWings200Ok} obj Optional instance to populate.
   * @return {module:model/GetFleetsFleetIdWings200Ok} The populated <code>GetFleetsFleetIdWings200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('squads')) {
        obj['squads'] = ApiClient.convertToType(data['squads'], [FleetsfleetIdwingsSquads]);
      }
    }
    return obj;
  }

  /**
   * id integer
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * squads array
   * @member {Array.<module:model/FleetsfleetIdwingsSquads>} squads
   */
  exports.prototype['squads'] = undefined;



  return exports;
}));


