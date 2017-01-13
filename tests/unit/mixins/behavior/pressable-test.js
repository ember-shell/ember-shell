/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import PressableMixin from 'ember-shell/mixins/behavior/pressable';

describe('UiPressableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiPressableObject = Ember.Object.extend(PressableMixin);
    let subject = UiPressableObject.create();
    expect(subject).to.be.ok;
  });
});
