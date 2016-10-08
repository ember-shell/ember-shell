import Ember from 'ember';
import Positionable from '../../mixins/ui/positionable';
import layout from '../../templates/components/shell/desktop-panel';

export default Ember.Component.extend(Positionable, {
  layout,
  classNames: ['esh-desktop-panel']
});
