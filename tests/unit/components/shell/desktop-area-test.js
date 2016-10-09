/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { beforeEach } from 'mocha';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';

describeComponent(
  'shell/desktop-area',
  'ShellDesktopAreaComponent',
  { unit: true },
  function() {    

    beforeEach(function(){
      this.component = this.subject();
      this.render();
    });
    
    it('should extend from sizeable and positionable mixins', function() {
      expect(UiSizeableMixin.detect(this.component)).to.be.ok;
      expect(this.component.get('size')).to.exist;
      expect(UiPositionableMixin.detect(this.component)).to.be.ok;
      expect(this.component.get('position')).to.exist;
    });

  }
);
