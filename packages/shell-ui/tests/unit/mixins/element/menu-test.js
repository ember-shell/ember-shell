/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import ElementMenuMixin from 'ember-shell/mixins/element/menu';

describe('ElementMenuMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementMenuObject = Ember.Object.extend(ElementMenuMixin);
    let subject = ElementMenuObject.create();
    expect(subject).to.be.ok;
  });
});
