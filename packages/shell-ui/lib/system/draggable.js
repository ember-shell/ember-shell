export default class Draggable {

  constructor(target, options){
    this.target = target;
    this.runraf = null;
    this.isDragging = false;
    this.offset = { x: 0, y: 0, r: 0, b: 0 };
    this.elSize = { w: 0, h: 0 };
    this.parent = target.parentNode;

    this.options = {
      handlerClass: 'esh-ui-draggable-handle',
      updateFn: () => {},
      startCallback: null,
      endCallback: null,
      moveCallback: null
    };

    if(options){
      Object.assign(this.options, options);
    }

    this.draggStartHandler = event => {
      this.draggStart(event);
    };

    this.draggEndHandler = event => {
      this.draggEnd(event);
    };

    this.draggMoveHandler = event => {
      this.draggMove(event);
    };

    target.addEventListener('mousedown', this.draggStartHandler, false);
    target.addEventListener('touchstart', this.draggStartHandler, false);
  }

  draggStart(event){

    if(event.target.className.indexOf(this.options.handlerClass) === -1 || event.button !== 0){
      return false;
    }

    this.isDragging = true;

    const $offset = Ember.$(this.target).offset();
    Ember.$('body').addClass('esh-dragging');

    const pageX = event.pageX || event.clientX + this.parent.scrollLeft;
    const pageY = event.pageY || event.clientY + this.parent.scrollTop;

    this.offset.x = pageX - $offset.left;
    this.offset.y = pageY - $offset.top;

    this.elSize.w = parseInt(this.target.style.width);
    this.elSize.h = parseInt(this.target.style.height);
    this.offset.r = this.parent.offsetWidth - this.elSize.w;
    this.offset.b = this.parent.offsetHeight - this.elSize.h;

    window.addEventListener('mousemove', this.draggMoveHandler, false);
    window.addEventListener('touchmove', this.draggMoveHandler, false);
    window.addEventListener('mouseup', this.draggEndHandler, false);
    window.addEventListener('touchend', this.draggEndHandler, false);
    window.addEventListener('touchcancel', this.draggEndHandler, false);

    if(this.options.startCallback && typeof this.options.startCallback === 'function'){
      this.options.startCallback.call();
    }
  }

  draggEnd(){
    this.isDragging = false;
    cancelAnimationFrame(this.runraf);
    Ember.$('body').removeClass('esh-dragging');

    window.removeEventListener('mousemove', this.draggMoveHandler, false);
    window.removeEventListener('touchmove', this.draggMoveHandler, false);
    window.removeEventListener('mouseup', this.draggEndHandler, false);
    window.removeEventListener('touchend', this.draggEndHandler, false);
    window.removeEventListener('touchcancel', this.draggEndHandler, false);

    if(this.options.endCallback && typeof this.options.endCallback === 'function'){
      this.options.endCallback.call();
    }
  }

  draggMove(event){
    if (this.isDragging) {

      let posX, posY;

      const pageX = event.pageX || event.clientX + this.parent.scrollLeft;
      const pageY = event.pageY || event.clientY + this.parent.scrollTop;

      if (pageX - this.offset.x < 0) {
        posX = 0;
      } else if (pageX - this.offset.x > this.offset.r) {
        posX = this.offset.r;
      } else {
        posX = pageX - this.offset.x;
      }

      if (pageY - this.offset.y < 0) {
        posY = 0;
      } else if (pageY - this.offset.y > this.offset.b) {
        posY = this.offset.b;
      } else {
        posY = pageY - this.offset.y;
      }

      this.runraf = requestAnimationFrame(
        () => this.options.updateFn(posX, posY)
      );

      if(this.options.moveCallback && typeof this.options.moveCallback === 'function'){
        this.options.moveCallback.call();
      }
    }
  }

}