import Ember from 'ember';
import layout from 'ember-shell/templates/desktop/panel/clock-date';
import PanelItemMixin from 'ember-shell/mixins/element/panel-item';
import moment from 'moment';

export default Ember.Component.extend(PanelItemMixin, {
  layout,
  classNames: ['esh-panel-clock-date'],

  init(){
    this._super(...arguments);

    this.timeInterval =  setInterval(() => this.updateTime(), 1000);
    this.updateTime();
  },

  updateTime(){
    this.set('timeDate', moment().format('ddd MMM H:mm:ss'));
  },

  didDestroyElement() {
    this._super(...arguments);
    clearInterval(this.timeInterval);
  }

});
