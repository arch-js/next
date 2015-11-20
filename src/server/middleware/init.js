export default function init(application, options) {
  return async (ctx, next) => {
    let state;

    if (typeof application.getInitialState === 'function') {
      state = await application.getInitialState();
    } else {
      state = {};
    }

    ctx.arch = {
      application,
      state,
      options
    };

    await next();
  }
}
