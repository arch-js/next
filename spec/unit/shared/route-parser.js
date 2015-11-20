import { match } from '../../../src/shared/route-parser';
import { assert } from 'chai';

describe('route-parser/match', () => {
  it('throws a TypeError when route not a string', () => {
    const matcher = () => match('/blog/15', null);
    assert.throws(matcher, TypeError);
  });

  it('throws a TypeError when url not a string', () => {
    const matcher = () => match(null, '/blog/:post');
    assert.throws(matcher, TypeError);
  });

  it('does not match if no params are provided', () => {
    assert.isFalse(match('/blog/15', '/blog/'));
  });

  it('returns a route context when a route matches', () => {
    const context = match('/blog/15', '/blog/:post');
    assert.deepEqual(context,{
      hash: null,
      path: '/blog/15',
      params: {
        'post': '15'
      },
      query: {},
      route: '/blog/:post',
      originalUrl: '/blog/15'
    });
  });

  it('adds hash data to url context', () => {
    const context = match('/blog/15#blah', '/blog/:post');
    assert.deepEqual(context,{
      hash: 'blah',
      path: '/blog/15',
      params: {
        'post': '15'
      },
      query: {},
      route: '/blog/:post',
      originalUrl: '/blog/15#blah'
    });
  });

  it('adds query data to url context', () => {
    const context = match('/blog/15?qs=hello', '/blog/:post');
    assert.deepEqual(context,{
      hash: null,
      path: '/blog/15',
      params: {
        'post': '15'
      },
      query: {
        qs: 'hello'
      },
      route: '/blog/:post',
      originalUrl: '/blog/15?qs=hello'
    });
  });

  it('supports query before hash', () => {
    const context = match('/blog/15?qs=hello#blah', '/blog/:post');
    assert.deepEqual(context,{
      hash: 'blah',
      path: '/blog/15',
      params: {
        'post': '15'
      },
      query: {
        qs: 'hello'
      },
      route: '/blog/:post',
      originalUrl: '/blog/15?qs=hello#blah'
    });
  });

  it('returns false when route does not match', () => {
    const context = match('/blog/15', '/users/:name');
    assert.isFalse(context);
  })
});
