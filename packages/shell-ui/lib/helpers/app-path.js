import Ember from 'ember';

export function appPath(params) {
  const [name, path] = params;
  return `/engines-dist/${name}/${path}`;
}

export default Ember.Helper.helper(appPath);
