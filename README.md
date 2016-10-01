# Ember-shell

An ember-cli add-on that provides a set of components, services and blueprints that enables a fully customizable OS-like shell, powered by ember-engines.

# Specs in progress:

## Components:

Inside an app with ember ember-shell, you may use the `{{shell.desktop-area}}` component to init a ember-shell desktop area where other shell-apps engines will be contained.
This component includes a number of sub-components needed to have a suitable working environment:

  - `{{shell.desktop-panel}}` component can be placed fixed on any edge of the rectangle or just floating. This will act as a container for the folllowing sub-component:
      - `{{shell.panel.main-menu}}` opens the shell's main menu.
      - `{{shell.panel.apps-list}}` that displays y manages a list of running shell-app engines.
      - `{{shell.panel.shortcuts-list}}` lists apps icons as shortcut access.
      - `{{shell.panel.widgets-list}}` it's a container for third-party shell panel widgets.
  - `{{shell.main-menu}}` it's a container for all available apps shortcuts. It also has a tab that holds shell configurations.
  - `{{shell.app-frame}}` it's the container for every shell-app engine, looks and behaves like a classic OS-like window and is highly customizable.
  - `{{shell.notification-area}} it's a container that allows to shows several types of notifications at shell level.



## Services.

  - `shell-manager` is responsible for every shell-app engine life-cycle.
  - `shell-registy` uses local-storage to store key-value data related to each available app and shell configuration. It should be able to sync with external sources as well.
  - `shell-auth` provides basic user/groups authentication and authorization to the shell session and it's running apps.


## Blueprints.

  - `ember-shell-app` Creates new shell-app (in-repo-engine) with a set of basic presets for a quick start.
  - `ember-shell-theme` Creates new shell-theme that let you customize your shell styles.


# Contributing

If you would like to contribute, you can fork the project, edit, and make a pull request.

## Tests

Please make sure that the test pass by running `ember test`. If you had a new functionality, add tests for it.

## Update the website & documentation

The documentation website lives under `tests/dummy`. It is a simple ember app. You can run the website locally:

```
npm install
bower install
ember serve
# visit localhost:4200
```
