/* jshint expr: true */
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import Ember from 'ember';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';
import UIStyleableMixin from 'ember-shell/mixins/ui/styleable';

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

  it('should extend from styleable and have a style property', function() {
    expect(UIStyleableMixin.detect(this.positionable)).to.be.ok;
    expect(this.positionable.style).to.be.ok;
  });

  it('should have a inlineStyle css string that updates on position change', function() {
    this.positionable.setStyle('transform: translate({{position.x}}px, {{position.y}}px);');
    this.positionable.setPosition([50, 50]);

    let newStyles = this.positionable.get('inlineStyle');

    expect(newStyles).to.equal('transform: translate(50px, 50px);');
  });


});
