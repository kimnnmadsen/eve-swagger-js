import { SSOAgent } from '../../internal/esi-agent';
import { esi } from '../../esi';
import * as r from '../../internal/resource-api';
/**
 * The API specification for all variants that access information about a
 * corporation's asset or multiple assets. This interface will not be used
 * directly, but will be filtered through some mapper, such as {@link Async} or
 * {@link Mapped} depending on what types of ids are being accessed. However,
 * this allows for a concise and consistent specification for all variants:
 * single, multiple, and all assets.
 *
 * When mapped, each key defined in this interface becomes a function that
 * returns a Promise resolving to the key's asset, or a collection related
 * to the key's asset if multiple assets are being accessed at once.
 *
 * This is an API wrapper over the end points handling types in the
 * [assets](https://esi.tech.ccp.is/latest/#/Assets) ESI endpoints.
 */
export interface AssetAPI {
    details: esi.corporation.asset.Asset;
    locations: esi.AssetLocation;
    names: string;
}
/**
 * An api adapter for accessing various details of a single corporation asset,
 * specified by a provided id when the api is instantiated.
 */
export declare class Asset extends r.impl.SimpleResource implements r.Async<AssetAPI> {
    private agent;
    private assets_?;
    constructor(agent: SSOAgent<number | r.impl.IDProvider>, id: number);
    /**
     * @esi_route ~get_corporations_corporation_id_assets
     *
     * @returns Information about the asset
     */
    details(): Promise<esi.corporation.asset.Asset>;
    /**
     * @esi_route post_corporations_corporation_id_assets_locations
     *
     * @returns The location of the specific asset
     */
    locations(): Promise<esi.AssetLocation>;
    /**
     * @esi_route post_corporations_corporation_id_assets_names
     *
     * @returns The name of the specific asset, for when the asset can have a
     *     user-specified name
     */
    names(): Promise<string>;
}
/**
 * An api adapter for accessing various details of multiple asset ids,
 * specified by a provided an array or set of ids when the api is instantiated.
 */
export declare class MappedAssets extends r.impl.SimpleMappedResource implements r.Mapped<AssetAPI> {
    private agent;
    private assets_?;
    constructor(agent: SSOAgent<number | r.impl.IDProvider>, ids: number[] | Set<number>);
    /**
     * @esi_route ~get_corporations_corporation_id_assets
     *
     * @returns Asset details mapped by asset id
     */
    details(): Promise<Map<number, esi.corporation.asset.Asset>>;
    /**
     * @esi_route post_corporations_corporation_id_assets_locations
     *
     * @returns Asset locations mapped by asset id
     */
    locations(): Promise<Map<number, esi.AssetLocation>>;
    /**
     * @esi_route post_corporations_corporation_id_assets_names
     *
     * @returns Asset names mapped by asset id
     */
    names(): Promise<Map<number, string>>;
}
/**
 * An api adapter for accessing various details about every asset of the
 * corporation.
 */
export declare class IteratedAssets extends r.impl.SimpleIteratedResource<esi.corporation.asset.Asset> implements r.Iterated<AssetAPI> {
    private agent;
    constructor(agent: SSOAgent<number | r.impl.IDProvider>);
    /**
     * @esi_route get_corporations_corporation_id_assets
     *
     * @returns Iterator over details of all a corporation's assets
     */
    details(): AsyncIterableIterator<[number, esi.corporation.asset.Asset]>;
    /**
     * @esi_route post_corporations_corporation_id_assets_locations
     *
     * @returns All asset locations
     */
    locations(): AsyncIterableIterator<[number, esi.AssetLocation]>;
    /**
     * @esi_route post_corporations_corporation_id_assets_names
     *
     * @returns All asset names
     */
    names(): AsyncIterableIterator<[number, string]>;
}
/**
 * A functional interface for getting APIs for a specific asset, a
 * known set of asset ids, or every asset for a corporation.
 */
export interface Assets {
    /**
     * Create a new asset api targeting every single asset of the corporation.
     *
     * @returns An IteratedAssets API wrapper
     */
    (): IteratedAssets;
    /**
     * Create a new asset api targeting the particular asset by `id`.
     *
     * @param id The asset id
     * @returns An Asset API wrapper for the given id
     */
    (id: number): Asset;
    /**
     * Create a new asset api targeting the multiple asset ids. If an
     * array is provided, duplicates are removed (although the input array is not
     * modified).
     *
     * @param ids The asset ids
     * @returns A MappedAssets API wrapper for the given ids
     */
    (ids: number[] | Set<number>): MappedAssets;
    /**
     * @esi_route get_corporations_corporation_id_containers_logs
     *
     * @returns The container logs for all audit-able containers owned by a corp
     */
    containerLogs(): AsyncIterableIterator<esi.corporation.asset.ContainersLog>;
    /**
     * @esi_route get_corporations_corporation_id_blueprints
     *
     * @returns All blueprints owned by a corporation
     */
    blueprints(): AsyncIterableIterator<esi.corporation.asset.Blueprint>;
    /**
     * @esi_route ~get_corporations_corporation_id_divisions
     *
     * @returns The hangar divisions of a corp, mapped from division to name
     */
    hangarDivisions(): Promise<Map<number, string>>;
}
/**
 * Create a new Assets instance that uses the given `agent` to make its HTTP
 * requests to the ESI interface. The id of the `agent` refers to the
 * corporation id. The token of the `agent` must refer to a character that has
 * authorized the expected scopes and has the appropriate in-game roles for the
 * corporation.
 *
 * @param agent The agent making actual requests
 * @returns A Assets instance
 */
export declare function makeAssets(agent: SSOAgent<number | r.impl.IDProvider>): Assets;