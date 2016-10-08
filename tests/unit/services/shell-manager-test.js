import { moduleFor, test } from 'ember-qunit';

let manager;

moduleFor('service:shell-manager', 'Unit | Service | shell manager', {
  beforeEach() {
    manager = this.subject();
  }
});

test('it exists', function(assert) {
  assert.ok(manager);
});

test('it starts with an empty list of running apps', function(assert) {
  assert.equal(manager.get('running.length'), 0);
});

test('it can retrieve a list of available apps', function(assert) {
  manager.get('available');
  assert.ok(manager);
});