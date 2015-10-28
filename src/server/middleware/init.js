export default function init(application, options) {
  return function* (next) {
    let state;

    if (typeof application.getInitialState === 'function') {
      state = yield application.getInitialState();
    } else {
      state = {};
    }

    this.arch = {
      application,
      state,
      options
    };

    yield next;
  }
}
