/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import ElementBackgroundMixin from 'ember-shell/mixins/element/background';

describe('ElementBackgroundMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementBackgroundObject = Ember.Object.extend(ElementBackgroundMixin);
    let subject = ElementBackgroundObject.create();
    expect(subject).to.be.ok;
  });
});
