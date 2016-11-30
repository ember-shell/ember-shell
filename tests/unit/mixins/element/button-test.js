/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import ElementButtonMixin from 'ember-shell/mixins/element/button';

describe('ElementButtonMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ElementButtonObject = Ember.Object.extend(ElementButtonMixin);
    let subject = ElementButtonObject.create();
    expect(subject).to.be.ok;
  });
});
