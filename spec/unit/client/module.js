import client from '../../../src/client';
import { assert } from 'chai';

describe('Client module', () => {
  it('exports a valid object', () => {
    assert.ok(client);
    assert.isObject(client);
  });

  it('includes client and shared modules', () => {
    assert.isDefined(client.cursor);
  });
});
