import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shell/desktop-area', 'Integration | Component | shell/desktop area', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{shell/desktop-area}}`);
  assert.equal(this.$('.esh-desktop-area').length, 1);
});

test('there is at least one panel component inside it', function(assert) {
  this.render(hbs`{{shell/desktop-area}}`);
  assert.equal(this.$('.esh-desktop-panel').length, 1);
});