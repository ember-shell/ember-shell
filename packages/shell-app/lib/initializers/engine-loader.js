import Ember from 'ember';
import fetch from 'ember-network/fetch';

const {
  Router,
  String: { camelize }
} = Ember;

/**
 * @thanksTo mike183 helping implement this
 */
export function initialize(application) {
  application.deferReadiness();

  application.engines = {};

  let engineConfigs = fetch('/asset-manifest.json').then(function(response) {
    return response.json();
  }).then( ({ bundles }) => {

    for(const engine in bundles){

      application.engines[camelize(engine)] = {
        dependencies: {
          services: [
            "shell-manager"
          ]
        }
      }

      Router.map(function(){
        this.mount(engine);
      });
    };

    application.advanceReadiness();

  });

}

export default {
  name: 'engine-loader',
  initialize
};
