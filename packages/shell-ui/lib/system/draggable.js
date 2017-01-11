import $ from 'jquery';

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
      limits: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      startCallback: null,
      endCallback: null,
      moveCallback: null
    };

    if(options){
      Ember.assign(this.options, options);
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

    const isTouch = event.sourceCapabilities.firesTouchEvents;
    const isOnHandler = event.target.classList.contains(this.options.handlerClass);
    const inputDevice = isTouch ? event.targetTouches[0] : event;

    if(!isOnHandler || (!isTouch && event.button !== 0)){
      return false;
    }

    this.isDragging = true;

    const $offset = $(this.target).offset();
    $('body').addClass('esh-dragging');

    const pageX = inputDevice.pageX || inputDevice.clientX + this.parent.scrollLeft;
    const pageY = inputDevice.pageY || inputDevice.clientY + this.parent.scrollTop;

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
    $('body').removeClass('esh-dragging');

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
      const isTouch = event.sourceCapabilities.firesTouchEvents;
      const inputDevice = isTouch ? event.targetTouches[0] : event;

      let posX, posY;

      const pageX = inputDevice.pageX || inputDevice.clientX + this.parent.scrollLeft;
      const pageY = inputDevice.pageY || inputDevice.clientY + this.parent.scrollTop;
      const limits = this.options.limits;

      if (pageX - this.offset.x < limits.left) {
        posX = limits.left;
      } else if (pageX - this.offset.x > this.offset.r) {
        posX = this.offset.r;
      } else {
        posX = pageX - this.offset.x;
      }

      if (pageY - this.offset.y < limits.top) {
        posY = limits.top;
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