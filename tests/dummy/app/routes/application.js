import Ember from 'ember';

export default Ember.Route.extend({

  manager: Ember.inject.service('shell-manager'),

  init(){
    this._super(...arguments);

    Ember.run.scheduleOnce('afterRender', this, () => {
      const manager = this.get('manager');
      manager.exec('esh-task-manager').then( () => {
        Ember.run.next(this, () => {
          this.transitionTo('esh-task-manager');
        });
      });
    });
  }

});
