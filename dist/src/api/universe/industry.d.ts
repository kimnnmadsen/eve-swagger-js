import { ESIAgent } from '../../internal/esi-agent';
import { Responses } from '../../internal/esi-types';
/**
 * An api adapter over the end points handling industry  via functions in the
 * [industry](https://esi.tech.ccp.is/latest/#/Industry) ESI endpoints.
 */
export interface Industry {
    /**
     * @esi_example esi.industry.facilities()
     *
     * @return Information on all industry facilities
     */
    facilities(): Promise<Responses['get_industry_facilities']>;
    /**
     * @esi_example esi.industry.systemCosts()
     *
     * @return Industry costs for all systems
     */
    systemCosts(): Promise<Responses['get_industry_systems']>;
}
/**
 * Create a new {@link Industry} instance that uses the given `agent` to
 * make its HTTP requests to the ESI interface.
 *
 * @param agent The agent making actual requests
 * @returns A Industry API instance
 */
export declare function makeIndustry(agent: ESIAgent): Industry;
