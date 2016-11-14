import Ember from 'ember';

export default Ember.Mixin.create({

  init(){
    this._super(...arguments);
    this._initInlineStyles();
  },

  setStyle(newStyle) {
    if(typeof newStyle !== "string" && !newStyle.length){
      Ember.assert('Must be a non-empty string', newStyle);
    } else {
      this.set('style', newStyle);
      this._initInlineStyles();
    }
  },

  /** TODO: Clean this up...  */
  _initInlineStyles() {
    if(this.get('style')){

      let styleArgs = this.get('style').match(/{{\s*[\w\.]+\s*}}/g).map( x => {
        return x.match(/[\w\.]+/)[0];
      });

      let computedArg = () => {
        let style = this.get('style');
        styleArgs.forEach( arg => {
          style = style.replace(`{{${arg}}}`, this.get(arg));
        });
        return style;
      };

      let cpArgs = styleArgs.slice(0);
      cpArgs.push(computedArg);

      if(this.hasOwnProperty('inlineStyle')){
        delete this.inlineStyle;
      }

      Ember.defineProperty(this, 'inlineStyle', Ember.computed.apply(this, cpArgs));        

      this._initializedStyles = true;
    }
  },

});
