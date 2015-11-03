import server from '../../../src/server';
import { assert } from 'chai';

/** @test {server} */
describe('Server', () => {
  it('Creates a server instance', () => {
    const application = {};
    const options = {};
    const app = server(application, options);
    assert.isDefined(app);
  });
});
