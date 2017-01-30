const Search = require('../Search');

/**
 * An api adapter that provides functions for accessing wormhole information
 * via the
 * [universe](https://esi.tech.ccp.is/latest/#/Universe) and
 * [search](https://esi.tech.ccp.is/latest/#/Search) ESI end points.
 * You should not usually instantiate this directly as its constructor requires
 * an internal api instance.
 */
class Wormholes {
  /**
   * Create a new Wormholes instance using the given `api`.
   *
   * @param api {ApiProvider} The api provider
   * @constructor
   */
  constructor(api) {
    this._api = api;

    /**
     * A Search module instance configured to search over the `'wormhole'`
     * type.
     *
     * @type {Search}
     */
    this.search = new Search(api, ['wormhole']);
  }
}

module.exports = Wormholes;
