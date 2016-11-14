/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import UiDraggableMixin from 'ember-shell/mixins/ui/draggable';

describe('UiDraggableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiDraggableObject = Ember.Object.extend(UiDraggableMixin);
    let subject = UiDraggableObject.create();
    expect(subject).to.be.ok;
  });
});
