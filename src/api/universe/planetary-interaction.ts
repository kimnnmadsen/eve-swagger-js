import { ESIAgent } from '../../internal/esi-agent';
import { Responses } from '../../internal/esi-types';

/**
 * An api adapter that provides functions for accessing the non-authenticated
 * [planetary
 * interaction](https://esi.tech.ccp.is/latest/#/Planetary_Interaction) ESI end
 *  points.
 */
export interface PlanetaryInteraction {
  /**
   * @esi_example esi.pi.schematic(id)
   *
   * @param id The schematic's ID
   * @return Details on the specific planetary interaction schematic
   */
  (id: number): Promise<Responses['get_universe_schematics_schematic_id']>;
}

/**
 * Create a new {@link PlanetaryInteraction} instance that uses the given
 * `agent` to make its HTTP requests to the ESI interface.
 *
 * @param agent The agent making actual requests
 * @returns An PlanetaryInteraction API instance
 */
export function makePlanetaryInteraction(agent: ESIAgent): PlanetaryInteraction {
  return <PlanetaryInteraction> <any> function (id: number) {
    return agent.request('get_universe_schematics_schematic_id',
        { path: { schematic_id: id } });
  };
}
