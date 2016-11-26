/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import ElementPanelMixin from 'ember-shell/mixins/element/panel';

describe('ElementPanelMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementPanelObject = Ember.Object.extend(ElementPanelMixin);
    let subject = ElementPanelObject.create();
    expect(subject).to.be.ok;
  });
});
