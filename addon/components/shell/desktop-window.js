import Ember from 'ember';
import layout from '../../templates/components/shell/desktop-window';
import ElementWindowMixin from 'ember-shell/mixins/element/window';

export default Ember.Component.extend(ElementWindowMixin, {
  layout,
  classNames: ['esh-desktop-window'],

  manager: Ember.inject.service('shell-manager'),

  init(){
    this._super(...arguments);

    this.set('app.window', this);

    Ember.run.schedule('afterRender', this, () => {
      this.updateStylesRenderPersist([
        { declaration: 'sizeable', property: 'size.width', value: 320 },
        { declaration: 'sizeable', property: 'size.height', value: 240 },
        { declaration: 'positionable', property: 'position.x', value: 50 },
        { declaration: 'positionable', property: 'position.y', value: 50 }
      ]);
    });
  },

  moveToFront(){
    const appPid = this.get('app.pid');
    this.get('manager.running').forEach( app => {
      if(appPid !== app.get('pid')) {
        app.get('window').updateStyleRenderPersist('positionable', 'position.z', 1);
      }
    });
    this.updateStyleRenderPersist('positionable', 'position.z', 2);
  },

  draggStartCallback(){
    this.moveToFront();
  }

});
