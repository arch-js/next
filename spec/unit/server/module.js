import server from '../../../src/server';
import { assert } from 'chai';

describe('Server module', () => {
  it('exports a valid object', () => {
    assert.ok(server);
    assert.isObject(server);
  });

  it('includes server and shared modules', () => {
    assert.isDefined(server.cursor);
  });
});
