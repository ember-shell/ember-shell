/* jshint expr:true */
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import Ember from 'ember';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';
import UIStyleableMixin from 'ember-shell/mixins/ui/styleable';

describe('UiSizeableMixin', function() {
  
  beforeEach(function() {
    this.UiSizeableObject = Ember.Object.extend(UiSizeableMixin);
    this.sizeable = this.UiSizeableObject.create();
  });

  it('should initialize', function() {
    expect(this.sizeable).to.be.ok;
  });

  it('should have a size object', function() {
    expect(this.sizeable.get('size')).to.exist;
  });
  
  it('should have "width" and "height" values inside size object', function() {
    expect(this.sizeable.get('size.width')).to.exist;
    expect(this.sizeable.get('size.height')).to.exist;
  });

  it('should update all sizes (width, height) and return the updated values', function() {
    let newSize = this.sizeable.setSize([400, 600]);

    expect(this.sizeable.get('size.width')).to.be.equal(400);
    expect(this.sizeable.get('size.height')).to.be.equal(600);

    expect(this.sizeable.get('size.width')).to.be.equal(newSize.width);
    expect(this.sizeable.get('size.height')).to.be.equal(newSize.height);
  });

  it('should extend from styleable and have a style property', function() {
    expect(UIStyleableMixin.detect(this.sizeable)).to.be.ok;
    expect(this.sizeable.style).to.be.ok;
  });

  it('should have a inlineStyle css string that updates on size change', function() {
    this.sizeable.setStyle('width: {{size.width}}px; height: {{size.height}}px;');
    this.sizeable.setSize([200, 200]);

    let newStyles = this.sizeable.get('inlineStyle');

    expect(newStyles).to.equal('width: 200px; height: 200px;');
  });

});
