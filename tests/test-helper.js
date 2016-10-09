import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';
import { mocha } from 'mocha';
import Reporter from './helpers/ember-cli-mocha-reporter';

setResolver(resolver);
mocha.reporter(Reporter);
