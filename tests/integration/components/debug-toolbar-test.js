/* jshint expr:true */
import { expect } from 'chai';
import Ember from 'ember';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/debug-toolbar',
  'Integration: ShellDebugToolbarComponent',
  {
    integration: true
  },
  function() {
    it.skip('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#shell/debug-toolbar}}
      //     template content
      //   {{/shell/debug-toolbar}}
      // `);
      this.set('app', Ember.Object.create({ pid: 1, name: 'test'}));
      this.render(hbs`{{shell/debug-toolbar app=app}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
