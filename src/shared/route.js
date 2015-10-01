/*
  src/shared/route.js
  define a route (string routeMatcher, React.Component component)
*/

import React from 'react';

export default function route(match, component) {
  if (typeof match !== 'string') {
    throw new TypeError(match + ' must be a string');
  }

  if ((typeof component !== 'function') || !(component.prototype instanceof React.Component)) {
    throw new TypeError(component + ' is not a React Component');
  }

  return [ match, component ];
};
