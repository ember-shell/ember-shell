import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/panel/clock-date';
import PanelItemMixin from 'ember-shell/mixins/element/panel-item';
import moment from 'moment';

export default Ember.Component.extend(PanelItemMixin, {
  layout,
  classNames: ['esh-panel-clock-date'],

  timeDate: null,

  didInsertElement(){
    this._super(...arguments);

    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  },

  updateTime(){
    this.set('timeDate', moment().format('ddd MMM H:mm:ss'));
  }

});
