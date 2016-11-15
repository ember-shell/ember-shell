/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import UiDropdownableMixin from 'ember-shell/mixins/ui/dropdownable';

describe('UiDropdownableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiDropdownableObject = Ember.Object.extend(UiDropdownableMixin);
    let subject = UiDropdownableObject.create();
    expect(subject).to.be.ok;
  });
});
