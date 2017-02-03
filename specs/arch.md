### Architecture (WIP)

#### Packages

- ember-main
  - EmberShellComponent
  - ShellManagerService
  - EmberShellInitializer

- shell-app
  - Application
  - ApplicationManager
  - EngineDriver
  - EnginePersistance (localStorage cache)

- shell-bus
  - Bus
  - BusService
  - BusMixin

- shell-security
  - User
  - Session
  - Group
  - Privilege
  - AuthAdapter
  - UacService
  - UacBlockComponent

- shell-store
  - Store
  - Package
  - Registry
  - UpdateNotifier

- shell-server (fastboot-middlewares)
  - ServerBus
  - Upstreams
  - Packages
  - Discoverer
  - SystemProc
  - Daemons

- shell-registry
  - ShellRegisty (on IndexDB)
  - ServerAdapter

- shell-desktop
  - desktop-appbox
    - AppBoxComponent

  - desktop-lockscreen
    - LockScreenComponent

  - desktop-workspace
    - Workspace
    - WorkspaceComponent

  - desktop-window
    - Window
    - WindowComponent
    - AppContainerComponent
    - StatusBarComponent
    - TitleBarComponent

  - desktop-widget
    - Widget
    - WidgetComponent

  - desktop-panel
    - Panel
    - PanelComponent
    - PanelItems
      - MenuButtonComponent
      - DateClockComponent
      - StatusMenuComponent
      - CurrentAppsComponent
      - ShortCutsComponent

- shell-ui

  - ui-elements
    - Background
    - Button
    - Menu
    - Icon
    - Label
    - Menu
    - PanelItem
    - Panel
    - Widget
    - Window
    - Workspace

  - ui-mixins
    - Alignable
    - Animatable
    - Draggable
    - Dropdownbable
    - Focusable
    - Positionable
    - Pressable
    - Resizeable
    - Scalable
    - Sizeable
    - Styleable

- ember-shell-apps
  - esh-store
  - esh-settings
  - esh-calendar
  - esh-tweaks
  - esh-themer
  - esh-calculator
  - esh-task-manager
  - esh-code
  - esh-tour