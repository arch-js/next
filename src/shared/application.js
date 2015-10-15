/**
 * Returns a new, registered application object.
 * @param {Array} [routes] - A route-set as defined by routes.
 * @param {Function} [start] - A function which is run as part of your application's startup.
 * @return {Object} - Application object
 */

export default function application({routes, getInitialState, start}) {
  return {
    getInitialState: (getInitialState ? getInitialState : () => {}),
    routes,
    start
  };
}
