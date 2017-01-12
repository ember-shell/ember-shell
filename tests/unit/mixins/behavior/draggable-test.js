/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import DraggableMixin from 'ember-shell/mixins/behavior/draggable';

describe('DraggableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let UiDraggableObject = Ember.Object.extend(DraggableMixin);
    let subject = UiDraggableObject.create();
    expect(subject).to.be.ok;
  });
});
