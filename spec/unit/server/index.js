import server from '../../../src/server';
import { assert } from 'chai';

/** @test {server} */
describe('Server', () => {
  it('Creates a server instance', () => {
    const routes = [];
    const app = server(routes);
    assert.isDefined(app);
  });
});
