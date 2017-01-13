/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {
  describe,
  beforeEach
} from 'mocha';
import {
  default as Panel,
  PanelManager
} from 'ember-shell/system/panel';
import { describeComponent, it } from 'ember-mocha';

import ClockDate from 'ember-shell/components/panel/clock-date';
import MenuButton from 'ember-shell/components/panel/menu-button';
import StatusMenu from 'ember-shell/components/panel/status-menu';
import TestItem from 'ember-shell/components/panel/test-item';

const {
  getOwner
} = Ember;

describeComponent(
  'shell/desktop-panel',
  'ShellDesktopPanelComponent',
  { unit: true },
  function() {

    let panelManager;

    beforeEach(function() {
      this.register('component:shell/panel/clock-date', ClockDate);
      this.register('component:shell/panel/status-menu', StatusMenu);
      this.register('component:shell/panel/menu-button', MenuButton);
      this.register('component:shell/panel/test-item', TestItem);

      panelManager = new PanelManager(getOwner(this));
    });

    describe('PrimaryPanelInstance', function() {

      let panelComponent;
      let panelInstance;

      beforeEach(function() {
        panelInstance = panelManager.panels.get('firstObject');
        panelComponent = this.subject({ panel: panelInstance });
      });

      it('should have menu-button item on it', function() {
        let hasMenuButton = panelComponent.get('items').any((item) =>
          item.name === "menu-button"
        );

        expect(hasMenuButton).to.be.true;
      });

    });

    describe('DefaultPanelInstance', function() {

      let panelComponent;
      let panelInstance;

      beforeEach(function() {
        panelInstance = panelManager.addPanel();
        panelComponent = this.subject({ panel: panelInstance });
      });

      it('should have a Panel instance', function() {
        panelInstance = panelComponent.get('panel');

        expect(panelInstance).to.exist;
        expect(Panel.detectInstance(panelInstance)).to.be.true;
      });

      it('should have a list of panel items', function() {
        let items = panelComponent.get('items');

        expect(items).to.exist;
        expect(Ember.isArray(items)).to.be.true;
      });

      it('should allow to insert a panel item into a panel', function() {
        let panelItem = panelManager.insertItem(panelInstance, 'test-item');

        expect(panelInstance.items.includes(panelItem)).to.be.true;
      });

    });

  }
);
