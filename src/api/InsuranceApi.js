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
    define(['ApiClient', 'model/GetInsurancePricesInternalServerError', 'model/GetInsurancePrices200Ok'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetInsurancePricesInternalServerError'), require('../model/GetInsurancePrices200Ok'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.InsuranceApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetInsurancePricesInternalServerError, root.EveSwaggerInterface.GetInsurancePrices200Ok);
  }
}(this, function(ApiClient, GetInsurancePricesInternalServerError, GetInsurancePrices200Ok) {
  'use strict';

  /**
   * Insurance service.
   * @module api/InsuranceApi
   * @version 0.3.2.dev3
   */

  /**
   * Constructs a new InsuranceApi. 
   * @alias module:api/InsuranceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getInsurancePrices operation.
     * @callback module:api/InsuranceApi~getInsurancePricesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetInsurancePrices200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List insurance levels
     * Return available insurance levels for all ship types  ---  Alternate route: &#x60;/v1/insurance/prices/&#x60;  Alternate route: &#x60;/legacy/insurance/prices/&#x60;  Alternate route: &#x60;/dev/insurance/prices/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.acceptLanguage Language to use in the response (default to en)
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/InsuranceApi~getInsurancePricesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetInsurancePrices200Ok>}
     */
    this.getInsurancePrices = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetInsurancePrices200Ok];

      return this.apiClient.callApi(
        '/insurance/prices/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
