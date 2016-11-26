### Architecture (WIP)

#### Packages

- ember-shell
  - BoostrapInitializer               // import { Bootstrap } from 'ember-shell/shell';
  - ShellService                      // import { ManagerService } from 'ember-shell/shell';
  - EmberShellComponent               // import { EmberShell } from 'ember-shell/shell';

- shell-app
  - Application                       // import { Application } from 'ember-shell/app';
  - AppManager                        // import { ApplicationManager } 'ember-shell/app';

  - engine-driver (not sure)
    - EngineInstance
    - EngineLoader
    - EngineAssetsLoader
    - EnginePersistance
    - EngineRouter
    - EngineRegistry

- shell-bus
  - Bus                               // import { Bus } from 'ember-shell/shell-bus';
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

- shell-server (fastboot-middlewares)

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
  - DesktopManagerService

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
    - Indicator
    - TasksComponent
    - ClockComponent
    - IndicatorComponent
    - ShortcutsComponent
    - MenuButtonComponent

- shell-debug
  - DebugToolbarComponent

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