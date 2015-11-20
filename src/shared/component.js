let index = 0;

export default function(component, meta = {}) {
  component.meta = { id: index++, ...meta };
  return component;
}
