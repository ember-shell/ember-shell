/* jshint expr:true */
import Ember from 'ember';
import {
  describeComponent,
  it
} from 'ember-mocha';
import {
  default as Panel,
  PanelManager
} from 'ember-shell/system/panel';
import { expect } from 'chai';
import { beforeEach } from 'mocha';
import hbs from 'htmlbars-inline-precompile';

import MenuButton from 'ember-shell/components/panel/menu-button';

const {
  getOwner
} = Ember;

let panelManager;
let primaryPanel;

describeComponent(
  'shell/desktop-panel',
  'Integration: ShellDesktopPanelComponent',
  { integration: true },
  function() {

    beforeEach(function() {
      this.register('component:shell/panel/menu-button', MenuButton);
      panelManager = new PanelManager(getOwner(this));
      primaryPanel = panelManager.panels.get('firstObject');
    });

    it('should render an item inside the panel', function() {
      this.set('panel', primaryPanel);
      this.render(hbs`{{shell/desktop-panel panel=panel}}`);

      expect(this.$('.esh-panel-item').length).to.be.ok;
    });

  }
);
