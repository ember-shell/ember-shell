/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import UiPressableMixin from 'ember-shell/mixins/ui/pressable';

describe('UiPressableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiPressableObject = Ember.Object.extend(UiPressableMixin);
    let subject = UiPressableObject.create();
    expect(subject).to.be.ok;
  });
});
