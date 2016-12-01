/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import ElementIconMixin from 'ember-shell/mixins/element/icon';

describe('ElementIconMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementIconObject = Ember.Object.extend(ElementIconMixin);
    let subject = ElementIconObject.create();
    expect(subject).to.be.ok;
  });
});
