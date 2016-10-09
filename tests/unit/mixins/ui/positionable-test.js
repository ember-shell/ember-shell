/* jshint expr: true */
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import Ember from 'ember';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';

describe('UiPositionableMixin', function() {

  beforeEach(function(){
    this.UiPositionableMixin = Ember.Object.extend(UiPositionableMixin);
    this.positionable = this.UiPositionableMixin.create();
  });

  it('should have a position object', function() {
    expect(this.positionable.get('position')).to.exist;
  });

  it('should have "x" "y" "z" values inside position object', function() {
    expect(this.positionable.get('position.x')).to.exist;
    expect(this.positionable.get('position.y')).to.exist;
    expect(this.positionable.get('position.z')).to.exist;
  });

  it('should update all positions (x, y) and return the updated values', function() {
    let newPositions = this.positionable.setPosition([10,15]);

    expect(this.positionable.get('position.x')).to.be.equal(10);
    expect(this.positionable.get('position.y')).to.be.equal(15);

    expect(this.positionable.get('position.x')).to.be.equal(newPositions.x);
    expect(this.positionable.get('position.y')).to.be.equal(newPositions.y);
  });

});
