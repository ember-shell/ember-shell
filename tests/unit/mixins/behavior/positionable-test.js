/* jshint expr: true */
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import Ember from 'ember';
import PositionableMixin from 'ember-shell/mixins/behavior/positionable';
import Styleable from 'ember-variable-styles/mixins/styleable';

describe('PositionableMixin', function() {

  beforeEach(function(){
    this.PositionableObject = Ember.Object.extend(PositionableMixin);
    this.positionable = this.PositionableObject.create();
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
    expect(Styleable.detect(this.positionable)).to.be.true;
    expect(this.positionable.get('positionableCSS')).to.exist;
  });

  it('should have a inlineStyle css string that updates on position change', function() {
    this.positionable.set('positionableCSS', 'transform: translate({{position.x}}px, {{position.y}}px);');
    this.positionable.setPosition([50, 50]);

    this.positionable.rebuildStyle('positionable');
    this.positionable.renderStylePersist('positionable');

    let newStyles = this.positionable.get('style');

    expect(newStyles.string).to.equal('transform: translate(50px, 50px);');
  });


});
