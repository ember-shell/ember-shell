/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { beforeEach } from 'mocha';
//import ShellWorkspaces from 'ember-shell/services/shell-workspaces';
import UiSizeableMixin from 'ember-shell/mixins/ui/sizeable';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';

describeComponent(
  'shell/desktop-area',
  'ShellDesktopAreaComponent',
  { unit: true },
  function() {    

    beforeEach(function(){
      this.desktopArea = this.subject();
      this.render();
    });
    
    it('should extend from sizeable and positionable mixins', function() {
      expect(UiSizeableMixin.detect(this.desktopArea)).to.be.ok;
      expect(this.desktopArea.get('size')).to.exist;
      expect(UiPositionableMixin.detect(this.desktopArea)).to.be.ok;
      expect(this.desktopArea.get('position')).to.exist;
    });

    it('should have a shell-workspaces service injected on it', function() {
      expect(this.desktopArea.workspaces).to.exist;
    });

  }
);
