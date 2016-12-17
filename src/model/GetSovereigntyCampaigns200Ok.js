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
    define(['ApiClient', 'model/SovereigntycampaignsParticipants'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SovereigntycampaignsParticipants'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetSovereigntyCampaigns200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.SovereigntycampaignsParticipants);
  }
}(this, function(ApiClient, SovereigntycampaignsParticipants) {
  'use strict';




  /**
   * The GetSovereigntyCampaigns200Ok model module.
   * @module model/GetSovereigntyCampaigns200Ok
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new <code>GetSovereigntyCampaigns200Ok</code>.
   * 200 ok object
   * @alias module:model/GetSovereigntyCampaigns200Ok
   * @class
   * @param campaignId {Integer} Unique ID for this campaign.
   * @param constellationId {Integer} The constellation in which the campaign will take place. 
   * @param eventType {module:model/GetSovereigntyCampaigns200Ok.EventTypeEnum} Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as \"Defense Events\", station_freeport as \"Freeport Events\". 
   * @param solarSystemId {Integer} The solar system the structure is located in. 
   * @param startTime {Date} Time the event is scheduled to start. 
   * @param structureId {Integer} The structure item ID that is related to this campaign. 
   */
  var exports = function(campaignId, constellationId, eventType, solarSystemId, startTime, structureId) {
    var _this = this;


    _this['campaign_id'] = campaignId;
    _this['constellation_id'] = constellationId;


    _this['event_type'] = eventType;

    _this['solar_system_id'] = solarSystemId;
    _this['start_time'] = startTime;
    _this['structure_id'] = structureId;
  };

  /**
   * Constructs a <code>GetSovereigntyCampaigns200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSovereigntyCampaigns200Ok} obj Optional instance to populate.
   * @return {module:model/GetSovereigntyCampaigns200Ok} The populated <code>GetSovereigntyCampaigns200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('attackers_score')) {
        obj['attackers_score'] = ApiClient.convertToType(data['attackers_score'], 'Number');
      }
      if (data.hasOwnProperty('campaign_id')) {
        obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'Integer');
      }
      if (data.hasOwnProperty('constellation_id')) {
        obj['constellation_id'] = ApiClient.convertToType(data['constellation_id'], 'Integer');
      }
      if (data.hasOwnProperty('defender_id')) {
        obj['defender_id'] = ApiClient.convertToType(data['defender_id'], 'Integer');
      }
      if (data.hasOwnProperty('defender_score')) {
        obj['defender_score'] = ApiClient.convertToType(data['defender_score'], 'Number');
      }
      if (data.hasOwnProperty('event_type')) {
        obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
      }
      if (data.hasOwnProperty('participants')) {
        obj['participants'] = ApiClient.convertToType(data['participants'], [SovereigntycampaignsParticipants]);
      }
      if (data.hasOwnProperty('solar_system_id')) {
        obj['solar_system_id'] = ApiClient.convertToType(data['solar_system_id'], 'Integer');
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
      if (data.hasOwnProperty('structure_id')) {
        obj['structure_id'] = ApiClient.convertToType(data['structure_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Score for all attacking parties, only present in Defense Events. 
   * @member {Number} attackers_score
   */
  exports.prototype['attackers_score'] = undefined;
  /**
   * Unique ID for this campaign.
   * @member {Integer} campaign_id
   */
  exports.prototype['campaign_id'] = undefined;
  /**
   * The constellation in which the campaign will take place. 
   * @member {Integer} constellation_id
   */
  exports.prototype['constellation_id'] = undefined;
  /**
   * Defending alliance, only present in Defense Events 
   * @member {Integer} defender_id
   */
  exports.prototype['defender_id'] = undefined;
  /**
   * Score for the defending alliance, only present in Defense Events. 
   * @member {Number} defender_score
   */
  exports.prototype['defender_score'] = undefined;
  /**
   * Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as \"Defense Events\", station_freeport as \"Freeport Events\". 
   * @member {module:model/GetSovereigntyCampaigns200Ok.EventTypeEnum} event_type
   */
  exports.prototype['event_type'] = undefined;
  /**
   * Alliance participating and their respective scores, only present in Freeport Events. 
   * @member {Array.<module:model/SovereigntycampaignsParticipants>} participants
   */
  exports.prototype['participants'] = undefined;
  /**
   * The solar system the structure is located in. 
   * @member {Integer} solar_system_id
   */
  exports.prototype['solar_system_id'] = undefined;
  /**
   * Time the event is scheduled to start. 
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * The structure item ID that is related to this campaign. 
   * @member {Integer} structure_id
   */
  exports.prototype['structure_id'] = undefined;


  /**
   * Allowed values for the <code>event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeEnum = {
    /**
     * value: "tcu_defense"
     * @const
     */
    "tcu_defense": "tcu_defense",
    /**
     * value: "ihub_defense"
     * @const
     */
    "ihub_defense": "ihub_defense",
    /**
     * value: "station_defense"
     * @const
     */
    "station_defense": "station_defense",
    /**
     * value: "station_freeport"
     * @const
     */
    "station_freeport": "station_freeport"  };


  return exports;
}));


