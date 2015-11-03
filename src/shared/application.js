/**
 * Returns a new, registered application object.
 * @param {Array} [routes] - A route-set as defined by routes.
 * @param {Function} [start] - A function which is run as part of your application's startup.
 * @param {Function} [getInitialState] - A function returning a value or promise of a value of application's initial state
 * @return {Object} - Application object
 */

export default function application({domRoot, routes, getInitialState, start}) {
  return {
    domRoot,
    getInitialState,
    routes,
    start
  };
}
