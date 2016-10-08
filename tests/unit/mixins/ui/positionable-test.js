/* jshint expr:false */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';

describe('UiPositionableMixin', function() {

  beforeEach(function(){
    this.Positionable = Ember.Object.extend(UiPositionableMixin);
    this.position = this.Positionable.create();
  });

  it('should have a position object', function() {
    expect(this.position.get('position')).to.exist;
  });

  it('should have "x" "y" "z" values inside position object', function() {
    expect(this.position.get('position.x')).to.exist;
    expect(this.position.get('position.y')).to.exist;
    expect(this.position.get('position.z')).to.exist;
  });

  it('should update all positions (x, y, z) and return the updated values', function() {
    let newPositions = this.position.setPositions([10,15,1]);

    expect(this.position.get('position.y')).to.be.equal(15);
    expect(this.position.get('position.z')).to.be.equal(1);
    expect(this.position.get('position.x')).to.be.equal(10);

    expect(this.position.get('position.x')).to.be.equal(newPositions.x);
    expect(this.position.get('position.y')).to.be.equal(newPositions.y);
    expect(this.position.get('position.z')).to.be.equal(newPositions.z);
  });

});
