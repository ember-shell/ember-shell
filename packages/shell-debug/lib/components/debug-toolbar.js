import Ember from 'ember';
import layout from 'ember-shell/templates/debug/debug-toolbar';
import WindowElement from 'ember-shell/mixins/element/window';

export default Ember.Component.extend(WindowElement, {
  layout,

  classNames: ['esh-debug-toolbar'],

  init(){

    const manager = this.get('manager');

    this.app = Ember.Object.create({
      title: "Debug Toolbar",
      icon: '/theme/app-icons/debug-toolbar.svg',
      hasStatusBar: true
    });

    this._super(...arguments);

    const posX = (window.innerWidth - 600) - 50;
    const posY = (window.innerHeight - 300) - 50;

    this.updateStylesRenderPersist([
      { declaration: 'sizeable', property: 'size.width', value: 600 },
      { declaration: 'sizeable', property: 'size.height', value: 300 },
      { declaration: 'positionable', property: 'position.x', value: posX },
      { declaration: 'positionable', property: 'position.y', value: posY }
    ]);
  },

  actions: {
    startApp(appName){
      this.get('manager').exec(appName, {
        title: appName,
        icon: '/theme/app-icons/test-icon.svg',
        hasStatusBar: false
      });
      this.set('execAppName', '');
      return false;
    }

  }
});
