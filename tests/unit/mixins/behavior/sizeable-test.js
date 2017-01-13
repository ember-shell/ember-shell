/* jshint expr:true */
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import Ember from 'ember';
import SizeableMixin from 'ember-shell/mixins/behavior/sizeable';
import Styleable from 'ember-variable-styles/mixins/styleable';

describe('SizeableMixin', function() {

  beforeEach(function() {
    this.SizeableObject = Ember.Object.extend(SizeableMixin);
    this.sizeable = this.SizeableObject.create();
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
    expect(Styleable.detect(this.sizeable)).to.be.true;
    expect(this.sizeable.get('sizeableCSS')).to.exist;
  });

  it('should have a inlineStyle css string that updates on size change', function() {
    this.sizeable.set('sizeableCSS','width: {{size.width}}px; height: {{size.height}}px;');
    this.sizeable.setSize([200, 200]);

    this.sizeable.rebuildStyle('sizeable');
    this.sizeable.renderStylePersist('sizeable');

    let newStyles = this.sizeable.get('style');

    expect(newStyles.string).to.equal('width: 200px; height: 200px;');
  });

});
