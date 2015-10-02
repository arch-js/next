/*
  src/shared/component.js
  arch component wrapper
*/

let index = 0;

export default function(component, options = {}) {
  component.meta = { id: index++, ...options };
  return component;
}
