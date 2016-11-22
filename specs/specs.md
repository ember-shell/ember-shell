#### Core Components

Inside an app with ember ember-shell, you may use the `{{shell/desktop-area}}` component to init a ember-shell desktop area where other shell-apps engines will be contained.
This component includes a number of sub-components needed to have a suitable working environment:

  - `{{shell/desktop-workspace}}` it's the container for window components(apps), there's at least one on a desktop-area container
  - `{{shell/desktop-window}}` it's the container for every shell-app engine, looks and behaves like a classic OS-like window and is highly customizable
  - `{{shell/desktop-panel}}` component can be placed fixed on any edge of the rectangle or just floating. This will act as a container for the following sub-component:
      - `{{shell/panel/main-menu}}` opens the shell's main menu.
      - `{{shell/panel/apps-list}}` that displays y manages a list of running shell-app engines.
      - `{{shell/panel/shortcuts-list}}` lists apps icons as shortcut access.
      - `{{shell/panel/widgets-list}}` it's a container for third-party shell panel widgets.
  - `{{shell/main-menu}}` it's a container for all available apps shortcuts. It also has a tab that holds shell configurations.
  - `{{shell/debug-toolbar}}` provides shortcuts for several actions, as well as a list of running applications
  - `{{shell/notification-area}}` it's a container that allows to shows several types of notifications at shell level.
  - `{{shell/dropdown-area}}` it's a container that allows menus to spawn on top of the rest of the elements

#### UI Components

  - `{{shell/ui-background}}` it acts as a unselectable background for its parent container. It support many background modes and formats.
  - `{{shell/ui-button}}` the basic ui element representation, with some ember-shell capabilities on it.
  - `{{shell/ui-icon}}` a box with an image, can be of any size and scale.
  - `{{shell/ui-label}}` a simple box with a text inside.
  - `{{shell/ui-menu}}` a menu-like dropdown element with items to select. It features multiple-depths, expandable list, animations and many more.

#### Core Objects

  - `App` Represents a ember-shell app instance.
  - `Panel` Represents a panel instannce on ember-shell desktop-area.
  - `Workspace` Represents a workspace instance.

#### Mixins

  - `ui/alignable` handles several types of 2D alignments of a mixed element on a container.
  - `ui/animàtable` handles events that triggers animation/transitions on a mixed element.
  - `ui/draggable` handles drag/drop events of a mixed element on a container.
  - `ui/dropdownable` handles menu-like drop-down behavior on a mixed element.
  - `ui/focusable` handles focus/blur event of a mixed element.
  - `ui/positionable` handles everything about the 2D positioning of a mixed element on a container.
  - `ui/pressable` handles events related to click/press/touch on a mixed element.
  - `ui/scalable` handles 2D scaling of a mixed element on a container.
  - `ui/sizeable` handles everything about 2D size of a mixed element.
  - ~~`ui/styleable` handles css styling on a mixed element (also a dependency of most of the mixin below).~~ (moved to this new addon: https://github.com/marcemira/ember-variable-styles )
  - `element/background` it mixes element/box and holds some base properties.
  - `element/box` base 2D 'box' element that mixes: ui/sizeable, ui/positionable.
  - `element/button` it mixes element/box, ui/pressable, ui/animatable, ui/focusable
  - `element/icon` it mixes element/box and holds some base properties
  - `element/label` it mixes element/box, and holds some base properties
  - `element/menu` it mixes element/box, ui/animatable and holds many base properties
  - `element/panel` it mixes element/box, ui/draggable.
  - `element/widget` it mixes element/box, ui/draggable, ui/focusable, ui/pressable.
  - `element/window` it mixes element/box, ui/animatable, ui/alignable, ui/scalable.

#### Services

  - `shell-manager` is responsible of managing the core aspects, such as application life-cycles, workspaces, and more...
  - `shell-registry` uses local-storage to store key-value data related to each available app and shell configuration. It should be able to sync with external sources as well.
  - `shell-auth` provides basic user/groups authentication and authorization to the shell session and it's running apps.

#### Blueprints

  - `ember-shell-app` Creates new shell-app (in-repo-engine) with a set of basic presets for a quick start.
  - `ember-shell-theme` Creates new shell-theme that let you customize your shell styles.

  ( more to come ... )