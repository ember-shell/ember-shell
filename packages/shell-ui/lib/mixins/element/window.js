import Ember from 'ember';
import DraggableMixin from 'ember-shell/mixins/behaviour/draggable';
import SizeableMixin from 'ember-shell/mixins/behaviour/sizeable';
import ReSizeableMixin from 'ember-shell/mixins/behaviour/resizeable';

export default Ember.Mixin.create(
  SizeableMixin,
  DraggableMixin,
  ReSizeableMixin, {

  classNames: ['esh-window','flex-col'],

  manager: Ember.inject.service('shell-manager'),

  moveToFront(){
    const appPid = this.get('app.pid');
    this.get('manager.apps').forEach( app => {
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
