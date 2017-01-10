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

import MenuButton from 'ember-shell/components/panel/menu-button';
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
      this.register('component:shell/panel/menu-button', MenuButton);
      panelManager = new PanelManager(getOwner(this));
    });

    describe('PrimaryPanelInstance', function() {

      let component;

      beforeEach(function() {
        let panel = panelManager.panels.get('firstObject');
        component = this.subject({ panel });
      });

      it('should have menu-button item on it', function() {
        let panel = component.get('panel');

        let hasMenuButton = component.get('items').any((item) =>
          item.name === "menu-button"
        );
        expect(hasMenuButton).to.be.true;
      });

    });

    describe('DefaultPanelInstance', function() {

      let component;

      beforeEach(function() {
        let panel = panelManager.addPanel();
        component = this.subject({ panel });
      });

      it('should have a Panel instance', function() {
        let panel = component.get('panel');
        expect(panel).to.exist;
        expect(Panel.detectInstance(panel)).to.be.true;
      });

      it('should have a list of panel items', function() {
        let items = component.get('items');
        expect(items).to.exist;
        expect(Ember.isArray(items)).to.be.true;
      });

      it('should allow to insert a panel item into a panel', function() {
        let panelItem = panelManager.insertItem(panel, 'test-item');

        expect(panel.items.contains(panelItem)).to.be.true;
      });

    });

  }
);
