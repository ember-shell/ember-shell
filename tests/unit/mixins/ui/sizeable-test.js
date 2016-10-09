/* jshint expr:true */
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import Ember from 'ember';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';

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

});
