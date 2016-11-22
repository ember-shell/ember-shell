### Architecture

#### Packages

- ember-shell

  - Boostrap
  - EmberShellComponent

  - shell-app
    - ShellApplication
    - EngineInstance
    - EngineLoader
    - EngineStateful
    - EngineAssetsLoader
    - EnginePersistance
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
    - 
    - AuthAdapter

  - shell-store
    - Store
    - Package
    - UpdaterService

  - shell-server

    - fastboot-middlewar

      - ServerBus
      - Upstreams
      - Packages
      - Discoverer
      - SystemProc
      - Daemons

  - shell-registry
    - LocalStorage

  - shell-desktop
    - Panel
    - Widget
    - Window
    - Workspace

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
- ember-shell-