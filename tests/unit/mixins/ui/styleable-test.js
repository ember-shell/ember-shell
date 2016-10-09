/* jshint expr:true */
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import Ember from 'ember';
import UiStyleableMixin from 'ember-shell/mixins/ui/styleable';

describe('UiStyleableMixin', function() {
  
  beforeEach(function(){
    this.UiStyleableObject = Ember.Object.extend(UiStyleableMixin);
  });

  it('should not initialize computedProperty unless if there is no style property', function() {
    this.styleable = this.UiStyleableObject.create();
    expect(this.styleable.get('inlineStyle')).to.not.exist;
  });

  it('should have a inlineStyle computedProperty that returns a computed inline style', function() {
    this.styleable = this.UiStyleableObject.create({
      style: 'position: {{pos}};',
      pos: 'absolute'
    });

    expect(this.styleable.get('inlineStyle')).to.exist;
    expect(this.styleable.get('inlineStyle')).to.equal('position: absolute;');
  });

  it('should be able to change styles to new ones', function() {
    this.styleable = this.UiStyleableObject.create({
      style: 'position: {{pos}};',
      pos: 'absolute',
      color: 'black'
    });

    this.styleable.setStyle('background: {{color}};');

    expect(this.styleable.get('inlineStyle')).to.equal('background: black;');
  });

});
