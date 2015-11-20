import React from 'react';

export default function(match, component) {
  if (typeof match !== 'string') {
    throw new TypeError(match + ' must be a string');
  }

  if (!(component.prototype instanceof React.Component)) {
    throw new TypeError(component + ' is not a React Component');
  }

  return { path: match, component: component };
}
