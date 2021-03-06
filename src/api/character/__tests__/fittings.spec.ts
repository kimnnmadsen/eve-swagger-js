jest.mock('../../../internal/esi-agent');

import { API, makeAPI } from '../../../index';
import { ESIAgent } from '../../../internal/esi-agent';

let api: API = makeAPI();
// Cast to any to get the private agent property
let agent: ESIAgent = (api as any).agent;

afterEach(() => {
  agent.__reset();
});

test('Fitting.del', () => {
  agent.__expectRoute('delete_characters_character_id_fittings_fitting_id', {
    'character_id': 1,
    'fitting_id': 2
  }, { token: 'my_token' });
  return api.characters(1, 'my_token').fittings(2).del().then(result => {
    expect(result).not.toBeDefined();
  });
});

test('Fittings.all', () => {
  agent.__expectRoute('get_characters_character_id_fittings',
      { 'character_id': 1 }, { token: 'my_token' });
  return api.characters(1, 'my_token').fittings().then(result => {
    expect(result).toBeDefined();
  });
});

test('Fittings.add', () => {
  let fit = {
    'name': 'Test',
    'description': 'The test fit is best fit',
    'items': [],
    'ship_type_id': 45
  };

  agent.__expectRoute('post_characters_character_id_fittings', {
    'character_id': 1,
    'fitting': fit
  }, { token: 'my_token' });
  return api.characters(1, 'my_token').fittings.add(fit).then(result => {
    expect(result instanceof Number || (typeof result) == 'number')
    .toBeTruthy();
    expect(Math.floor(result)).toEqual(result);
  });
});
