### Architecture (WIP)

#### Packages

- ember-shell

  - Boostrap
  - EmberShellComponent

  - shell-app
    - Application

    - engine-driver (not sure)
      - EngineInstance
      - EngineLoader
      - EngineAssetsLoader
      - EnginePersistance
      - EngineRouter
      - EngineRegistry

  - shell-bus
    - UserBus
    - ShellBus
    - ServerBus
    - BusService
    - BusMessage

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

  - shell-server

    - fastboot-middleware

      - ServerBus
      - Upstreams
      - Packages
      - Discoverer
      - SystemProc
      - Daemons

  - shell-registry
    - LocalStorage
    - ServerAdapter

  - shell-desktop
    - Panel
    - PanelComponent
    - Widget
    - WidgetComponent
    - Window
    - WindowComponent
    - Workspace
    - Workspace
    - LockScreen
    - LockScreenComponent
    - DesktopAreaComponent
    - AppBoxComponent

    - shell-panel
      - Indicator
      - Tasks
      - Shortcuts
      - MenuButtonComponent

  - shell-ui

    - ui-elements
      - Background
      - Button
      - Menu
      - Icon
      - Label

    - ui-mixins
      - Alignable
      - Animatable
      - Draggable
      - Dropbable
      - Focusable
      - Positionable
      - Pressable
      - Scalable
      - Sizeable
      - Styleable

- ember-shell-apps
  - shell-store
  - shell-settings
  - shell-calendar
  - shell-tweaks
  - shell-themer
  - shell-calculator
  - shell-code