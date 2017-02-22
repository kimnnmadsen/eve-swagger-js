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
    root.EveSwaggerInterface.PutFleetsFleetIdMembersMemberIdMovement = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PutFleetsFleetIdMembersMemberIdMovement model module.
   * @module model/PutFleetsFleetIdMembersMemberIdMovement
   * @version 0.4.1.dev1
   */

  /**
   * Constructs a new <code>PutFleetsFleetIdMembersMemberIdMovement</code>.
   * movement object
   * @alias module:model/PutFleetsFleetIdMembersMemberIdMovement
   * @class
   * @param role {module:model/PutFleetsFleetIdMembersMemberIdMovement.RoleEnum} - If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified - If a character is moved to the `wing_commander` role, only `wing_id` should be specified - If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified - If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified 
   */
  var exports = function(role) {
    var _this = this;

    _this['role'] = role;


  };

  /**
   * Constructs a <code>PutFleetsFleetIdMembersMemberIdMovement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutFleetsFleetIdMembersMemberIdMovement} obj Optional instance to populate.
   * @return {module:model/PutFleetsFleetIdMembersMemberIdMovement} The populated <code>PutFleetsFleetIdMembersMemberIdMovement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('squad_id')) {
        obj['squad_id'] = ApiClient.convertToType(data['squad_id'], 'Integer');
      }
      if (data.hasOwnProperty('wing_id')) {
        obj['wing_id'] = ApiClient.convertToType(data['wing_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * - If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified - If a character is moved to the `wing_commander` role, only `wing_id` should be specified - If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified - If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified 
   * @member {module:model/PutFleetsFleetIdMembersMemberIdMovement.RoleEnum} role
   */
  exports.prototype['role'] = undefined;
  /**
   * squad_id integer
   * @member {Integer} squad_id
   */
  exports.prototype['squad_id'] = undefined;
  /**
   * wing_id integer
   * @member {Integer} wing_id
   */
  exports.prototype['wing_id'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "fleet_commander"
     * @const
     */
    "fleet_commander": "fleet_commander",
    /**
     * value: "wing_commander"
     * @const
     */
    "wing_commander": "wing_commander",
    /**
     * value: "squad_commander"
     * @const
     */
    "squad_commander": "squad_commander",
    /**
     * value: "squad_member"
     * @const
     */
    "squad_member": "squad_member"  };


  return exports;
}));


