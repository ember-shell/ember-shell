import Ember from 'ember';
import config from '../config/environment';

const merge = Ember.assign || Ember.merge;
const emberShellDefaults = {
  theme: 'clean-shell'
};

export function initialize(application) {
  const { emberShell } = config || {};
  const options = merge(emberShellDefaults, emberShell);

  application.register('config:ember-shell', options, { instantiate: false });
  application.inject('service:shell-manager', 'config', 'config:ember-shell');
}

export default {
  name: 'ember-shell',
  initialize
};