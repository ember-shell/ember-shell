/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import ElementLabelMixin from 'ember-shell/mixins/element/label';

describe('ElementLabelMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementLabelObject = Ember.Object.extend(ElementLabelMixin);
    let subject = ElementLabelObject.create();
    expect(subject).to.be.ok;
  });
});
