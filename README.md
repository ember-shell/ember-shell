# ember-shell [![Build Status](https://travis-ci.org/marcemira/ember-shell.svg?branch=master)](https://travis-ci.org/marcemira/ember-shell)

This Ember addon provides a fully customizable OS-like shell environment and window manager to run your own [ember-engines](https://github.com/dgeb/ember-engines) apps.
It consist of a set of core objects, components, mixins, services and blueprints that you can extend, customize and implement as you want.

## Specs in progress:

#### Components

Inside an app with ember ember-shell, you may use the `{{shell/desktop-area}}` component to init a ember-shell desktop area where other shell-apps engines will be contained.
This component includes a number of sub-components needed to have a suitable working environment:

  - `{{shell/desktop-workspace}}` it's the container for window components(apps), there's at least one on a desktop-area container
  - `{{shell/desktop-window}}` it's the container for every shell-app engine, looks and behaves like a classic OS-like window and is highly customizable
  - `{{shell/desktop-panel}}` component can be placed fixed on any edge of the rectangle or just floating. This will act as a container for the following sub-component:
      - `{{shell/panel.main-menu}}` opens the shell's main menu.
      - `{{shell/panel.apps-list}}` that displays y manages a list of running shell-app engines.
      - `{{shell/panel.shortcuts-list}}` lists apps icons as shortcut access.
      - `{{shell/panel.widgets-list}}` it's a container for third-party shell panel widgets.
  - `{{shell/main-menu}}` it's a container for all available apps shortcuts. It also has a tab that holds shell configurations.
  - `{{shell/notification-area}} it's a container that allows to shows several types of notifications at shell level.
  - `{{shell/debug-toolbar}}` provides shortcuts for several actions, as well as a list of running applications

#### Core Objects

  - `App` Represents a ember-shell app instance
  - `Workspace` Represents a workspace instance

#### Mixins

  - `ui/styleable` handles css styling on a mixed element (also a dependency of most of the mixin below).
  - `ui/positionable` handles everything about the 2D positioning of a mixed element on a container.
  - `ui/draggable` handles drag/drop events of a mixed element on a container.
  - `ui/sizeable` handles everything about 2D size of a mixed element.
  - `ui/scaleable` handles 2D scaling of a mixed element on a container.
  - `ui/alignable` handles several types of 2D alignments of a mixed element on a container.
  - `ui/animatable` handles events that triggers animation/transitions on a mixed element.
  - `ui/pressable` handles events related to click/press/touch on a mixed element.
  - `ui/focusable` handles focus/blur event of a mixed element.
  - `element/box` base 2D 'box' element that mixes: ui/sizeable, ui/positionable.
  - `element/widget` it mixes element/box with ui/draggable, ui/focusable, ui/pressable.
  - `element/window` it mixes element/box with ui/animatable, ui/alignable, ui/scalable.
  - `element/panel` it mixes element/widget with

#### Services

  - `shell-manager` is responsible of managing the core aspects, such as application life-cycles, workspaces, and more...
  - `shell-registry` uses local-storage to store key-value data related to each available app and shell configuration. It should be able to sync with external sources as well.
  - `shell-auth` provides basic user/groups authentication and authorization to the shell session and it's running apps.

#### Blueprints

  - `ember-shell-app` Creates new shell-app (in-repo-engine) with a set of basic presets for a quick start.
  - `ember-shell-theme` Creates new shell-theme that let you customize your shell styles.

# Contributing

If you would like to contribute, you can fork the project, edit, and make a pull request.

### Tests

This is a sort of TDD/BDD type of development that uses Mocha/Chai. 
Please make sure that the test pass by running `ember test`. If you had a new functionality, add tests for it.

### Update the website & documentation

The documentation website lives under `tests/dummy`. It is a simple ember app. You can run the website locally:

```
npm install
bower install
ember serve
# visit localhost:4200
```
