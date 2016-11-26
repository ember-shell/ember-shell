/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import ElementWidgetMixin from 'ember-shell/mixins/element/widget';

describe('ElementWidgetMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementWidgetObject = Ember.Object.extend(ElementWidgetMixin);
    let subject = ElementWidgetObject.create();
    expect(subject).to.be.ok;
  });
});
