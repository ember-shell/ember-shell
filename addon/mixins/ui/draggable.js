import Ember from 'ember';
import UiPositionableMixin from 'ember-shell/mixins/ui/positionable';

export default Ember.Mixin.create(UiPositionableMixin, {

  draggableHandleClassName: 'esh-ui-draggable-handle',

  isDragReady: false,
  draggableElement: null,
  draggableHandler: null,
  draggableParent: null,
  dragOffset: { x: 0,  y: 0 },
  draggingAnimationFrame: null,

  init(){
    this._super(...arguments);
    Ember.run.schedule('afterRender', this, () => {
      this.set('draggableElement', this.$());
      this.set('draggableHandler', this.$('.' + this.get('draggableHandleClassName')));
      this.set('draggableParent', this.$().parent());

      //Ember.assert('There should be just one child element with a draggable-handle class, none or more than one has been provided', this.get('draggableHandler.length') === 1);
    });
  },

  mouseDown(event) {
    this.set('isDragReady', true);

    const element = this.get('draggableElement'),
          parent = this.get('draggableParent'),
          offset = element.offset();

    event.pageX = event.pageX || event.clientX + parent.scrollLeft;
    event.pageY = event.pageY || event.clientY + parent.scrollTop;

    this.set('dragOffset.x', event.pageX - offset.left);
    this.set('dragOffset.y', event.pageY - offset.top);
  },

  mouseUp(){
    this.set('isDragReady', false);
    cancelAnimationFrame(this.get('draggingAnimationFrame'));
  },

  mouseLeave(){
    if (this.get('isDragReady')) {
      this.set('isDragReady', false);
      cancelAnimationFrame(this.get('draggingAnimationFrame'));
    }
  },

  mouseMove(event){
    if (this.get('isDragReady')) {
      let offsetX, offsetY;
      const parent = this.get('draggableParent'),
        dragOffset = this.get('dragOffset');

      event.pageX = event.pageX || event.clientX + parent.scrollLeft;
      event.pageY = event.pageY || event.clientY + parent.scrollTop;

      if (event.pageX - dragOffset.x < 0) {
        offsetX = 0;
      } else {
        offsetX = event.pageX - dragOffset.x;
      }

      if (event.pageY - dragOffset.y < 0) {
        offsetY = 0;
      } else {
        offsetY = event.pageY - dragOffset.y;
      }

      this.set('draggingAnimationFrame', requestAnimationFrame( () =>
        {
          this.updateStylesRender([
            {declaration: 'positionable', property: 'position.x', value: offsetX},
            {declaration: 'positionable', property: 'position.y', value: offsetY},
          ]);
        }
      ));
    }
  }

});
