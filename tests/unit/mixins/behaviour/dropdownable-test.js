/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import DropdownableMixin from 'ember-shell/mixins/behaviour/dropdownable';

describe('DropdownableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiDropdownableObject = Ember.Object.extend(DropdownableMixin);
    let subject = UiDropdownableObject.create();
    expect(subject).to.be.ok;
  });
});
