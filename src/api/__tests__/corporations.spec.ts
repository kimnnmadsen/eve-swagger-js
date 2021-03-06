jest.mock('../../internal/esi-agent');

import { API, makeAPI } from '../../index';
import { ESIAgent } from '../../internal/esi-agent';

let api: API = makeAPI();
// Cast to any to get the private agent property
let agent: ESIAgent = (api as any).agent;

afterEach(() => {
  agent.__reset();
});

test('Corporation.info', () => {
  agent.__expectRoute('get_corporations_corporation_id', { 'corporation_id': 1 });
  return api.corporations(1).info().then(result => {
    expect(result).toBeDefined();
  });
});

test('Corporation.history', () => {
  agent.__expectRoute('get_corporations_corporation_id_alliancehistory', { 'corporation_id': 1 });
  return api.corporations(1).history().then(result => {
    expect(result).toBeDefined();
  });
});

test('Corporation.icon', () => {
  agent.__expectRoute('get_corporations_corporation_id_icons', { 'corporation_id': 1 });
  return api.corporations(1).icon().then(result => {
    expect(result).toBeDefined();
  });
});

test('Corporation.loyaltyOffers', () => {
  agent.__expectRoute('get_loyalty_stores_corporation_id_offers', { 'corporation_id': 1 });
  return api.corporations(1).loyaltyOffers().then(result => {
    expect(result).toBeDefined();
  });
});

test('Corporations.npc', () => {
  agent.__expectRoute('get_corporations_npccorps', {});
  return api.corporations.npc().then(result => {
    expect(result).toBeDefined();
  });
});

test('Corporations.names small', () => {
  agent.__expectRoute('get_corporations_names', { 'corporation_ids': [2] });
  return api.corporations.names([2]).then(result => {
    // Expect the results to be a Map with the keys
    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBeGreaterThan(0);
  });
});

test('Corporations.names large', () => {
  let ids = [...new Array(130).keys()];
  agent.__expectRoute('post_universe_names', { 'ids': ids }, {
    returns: [
      {
        'id': 1,
        'name': 'Test',
        'category': 'corporation'
      }
    ]
  });
  return api.corporations.names(ids).then(result => {
    // Expect the results to be a Map with the keys
    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBeGreaterThan(0);
  });
});

test('Corporations.search', () => {
  agent.__expectRoute('get_search', {
    'search': 'search text',
    'categories': ['corporation'],
    'strict': false
  });
  return api.corporations.search('search text').then(result => {
    // Expect the results to be an array
    expect(Array.isArray(result)).toBeTruthy();
  })
});

test('Corporations.search.strict', () => {
  agent.__expectRoute('get_search', {
    'search': 'search text',
    'categories': ['corporation'],
    'strict': true
  });
  return api.corporations.search.strict('search text').then(result => {
    // Expect the results to be an array
    expect(Array.isArray(result)).toBeTruthy();
  })
});
