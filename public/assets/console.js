"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('console/app', ['exports', 'ember', 'console/resolver', 'ember-load-initializers', 'console/config/environment'], function (exports, _ember, _consoleResolver, _emberLoadInitializers, _consoleConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _consoleConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _consoleConfigEnvironment['default'].podModulePrefix,
    Resolver: _consoleResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _consoleConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('console/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('console/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('console/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('console/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroup['default'];
    }
  });
});
define('console/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('console/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButton['default'];
    }
  });
});
define('console/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('console/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('console/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('console/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('console/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _emberBootstrapComponentsBsDropdownMenuDivider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuDivider['default'];
    }
  });
});
define('console/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('console/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('console/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('console/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('console/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _emberBootstrapComponentsBsFormElementControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControl['default'];
    }
  });
});
define('console/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementControlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlCheckbox['default'];
    }
  });
});
define('console/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _emberBootstrapComponentsBsFormElementControlInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlInput['default'];
    }
  });
});
define('console/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _emberBootstrapComponentsBsFormElementControlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlTextarea['default'];
    }
  });
});
define('console/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBsFormElementErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementErrors['default'];
    }
  });
});
define('console/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _emberBootstrapComponentsBsFormElementFeedbackIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementFeedbackIcon['default'];
    }
  });
});
define('console/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _emberBootstrapComponentsBsFormElementLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLabel['default'];
    }
  });
});
define('console/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontal['default'];
    }
  });
});
define('console/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox['default'];
    }
  });
});
define('console/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInline['default'];
    }
  });
});
define('console/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox['default'];
    }
  });
});
define('console/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVertical) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVertical['default'];
    }
  });
});
define('console/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox['default'];
    }
  });
});
define('console/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('console/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('console/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('console/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('console/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('console/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('console/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('console/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _emberBootstrapComponentsBsModalHeaderClose) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderClose['default'];
    }
  });
});
define('console/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _emberBootstrapComponentsBsModalHeaderTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderTitle['default'];
    }
  });
});
define('console/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('console/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('console/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('console/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('console/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('console/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('console/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('console/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('console/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('console/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('console/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('console/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('console/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('console/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('console/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('console/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('console/components/send-message', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    socketIOService: _ember['default'].inject.service('socket-io'),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      var socket = this.get('socketIOService').socketFor('http://localhost:8080/');

      socket.on('connection', function () {
        socket.emit('join', 'some data');
      });
      socket.on('messages', function (data) {
        console.log(data);
      });
    },
    actions: {
      submit: function submit() {
        var socket = this.get('socketIOService').socketFor('http://localhost:8080/');
        var message = this.get('message');

        socket.emit('notifyOutage', message);
      }
    }
  });
});
define('console/helpers/app-version', ['exports', 'ember', 'console/config/environment'], function (exports, _ember, _consoleConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _consoleConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('console/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('console/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('console/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('console/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('console/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'console/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _consoleConfigEnvironment) {
  var _config$APP = _consoleConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('console/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('console/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('console/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('console/initializers/export-application-global', ['exports', 'ember', 'console/config/environment'], function (exports, _ember, _consoleConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_consoleConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _consoleConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_consoleConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('console/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('console/initializers/load-bootstrap-config', ['exports', 'console/config/environment', 'ember-bootstrap/config'], function (exports, _consoleConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_consoleConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('console/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('console/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("console/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('console/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('console/router', ['exports', 'ember', 'console/config/environment'], function (exports, _ember, _consoleConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _consoleConfigEnvironment['default'].locationType,
    rootURL: _consoleConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('console/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('console/services/socket-io', ['exports', 'ember-websockets/services/socket-io'], function (exports, _emberWebsocketsServicesSocketIo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWebsocketsServicesSocketIo['default'];
    }
  });
});
define('console/services/websockets', ['exports', 'ember-websockets/services/websockets'], function (exports, _emberWebsocketsServicesWebsockets) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWebsocketsServicesWebsockets['default'];
    }
  });
});
define("console/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XUGVe02t", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"send-message\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "console/templates/application.hbs" } });
});
define("console/templates/components/send-message", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kdgR2WlQ", "block": "{\"statements\":[[\"block\",[\"bs-form\"],null,[[\"model\",\"onSubmit\"],[[\"get\",[null]],[\"helper\",[\"action\"],[[\"get\",[null]],\"submit\"],null]]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"form\",\"element\"],null,[[\"controlType\",\"label\",\"property\"],[\"textarea\",\"Message\",\"message\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"bs-button\"],null,[[\"defaultText\",\"type\",\"buttonType\"],[\"Submit\",\"primary\",\"submit\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"form\"]}],\"hasPartials\":false}", "meta": { "moduleName": "console/templates/components/send-message.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('console/config/environment', ['ember'], function(Ember) {
  var prefix = 'console';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("console/app")["default"].create({"name":"console","version":"0.0.0+46d9ea7c"});
}

/* jshint ignore:end */
//# sourceMappingURL=console.map
