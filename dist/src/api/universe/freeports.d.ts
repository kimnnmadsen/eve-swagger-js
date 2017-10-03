import { ESIAgent } from '../../internal/esi-agent';
import { Responses } from '../../internal/esi-types';
/**
 * An api adapter over the end points handling public structures via functions
 * in the [universe](https://esi.tech.ccp.is/latest/#/Universe) ESI endpoints.
 */
export interface Freeports {
    /**
     * @esi_example esi.freeports()
     *
     * @returns List of structure IDs that are publicly accessible
     */
    (): Promise<Responses['get_universe_structures']>;
}
/**
 * Create a new {@link Freeports} instance that uses the given `agent` to
 * make its HTTP requests to the ESI interface.
 *
 * @param agent The agent making actual requests
 * @returns A Freeports API instance
 */
export declare function makeFreeports(agent: ESIAgent): Freeports;
