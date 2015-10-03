let index = 0;

/**
 * Wraps a component in arch-specific metadata.
 * @param {React Component} [component] - The component to wrap.
 * @param {Object} [meta] - Metadata to wrap the component with.
 * @return {React Component} - Component class with arch-specific metadata applied to it,
 */

export default function(component, meta = {}) {
  component.meta = { id: index++, ...meta };
  return component;
}
