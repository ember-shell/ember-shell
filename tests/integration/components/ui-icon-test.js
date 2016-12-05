/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'shell/ui-icon',
  'Integration: ShellUiIconComponent', { integration: true }, function() {

    it('renders an image icon with size and image url', function() {
      const iconUrl = '/img/test-icon.svg';

      this.set('iconUrl', iconUrl);
      this.set('iconSize', 24);

      this.render(hbs`{{shell/ui-icon iconUrl=iconUrl iconSize=iconSize}}`);

      expect(this.$('ui-icon')[0].style.width).to.equal('24px');
      expect(this.$('ui-icon')[0].style.height).to.equal('24px');
      expect(this.$('ui-icon')[0].style["background-image"]).to.include(iconUrl);
    });
  }
);
