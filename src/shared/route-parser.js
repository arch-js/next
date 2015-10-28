import pathToRegExp from 'path-to-regexp';
import url from 'url';

function joinParams(tokens, matches) {
  let params = {};

  tokens.forEach((token, index) => {
    if (typeof token === 'object') {
      params[token.name] = matches[index];
    }
  });

  return params;
}

export function match(originalUrl, route) {
  if (typeof originalUrl !== 'string') throw new TypeError(`originalUrl must be a string (currently: ${originalUrl})`);
  if (typeof route !== 'string') throw new TypeError(`route must be a string (currently: ${route})`);

  let {
    pathname: path,
    query,
    hash
  } = url.parse(originalUrl, true);

  const tokens = pathToRegExp.parse(route);
  const exp = pathToRegExp.tokensToRegExp(tokens);

  let matches = exp.exec(path);

  if (!matches) return false;

  hash = (hash ? hash.slice(1, hash.length) : hash);
  let params = joinParams(tokens, matches);

  return {
    hash,
    originalUrl,
    params,
    path,
    query,
    route
  };
}
