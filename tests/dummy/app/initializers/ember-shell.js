export function initialize() {
  const app = arguments[1] || arguments[0];
  app.inject('route', 'main', 'service:shell-manager');
}

export default {
  name: 'ember-shell',
  initialize
};
