require.config({
    paths: {
        "jquery": "lib/jquery",
        "jquery-ui": "lib/jquery-ui.min",

        "jquery-socket": "connectors/isolario/jquery.gracefulWebSocket",
        "isolario-facade": "connectors/isolario/IsolarioFacade",
        "isolario-socket": "connectors/isolario/IsolarioWebSocket",
        "isolario-errors": "connectors/isolario/errors",
        "streaming-adapter": "connectors/StreamingAdapter",

        "underscore": "lib/underscore",
        "backbone": "lib/backbone",
        "tinyscrollbar": "lib/jquery.tinyscrollbar.min",
        "mousewheel": "lib/jquery.mousewheel.min",
        "timepicker": "lib/jquery-ui-timepicker-addon",
        "mustaches": "lib/mustaches",
        "raphael": "lib/raphael",
        "raphael-pan": "lib/raphael-pan",
        "model": "widget/bgplayjs-common-model",

        "config": "widget/bgplay-isolario/bgplay-config",
        "modules": "widget/bgplay-isolario/bgplay-modules",


        "TreeMap": "lib/TreeMap",
        "dateFormat": "lib/dateFormat",
        //"xdomainajax": "lib/jquery.xdomainajax",

        "compatibilityTricks": "utils/compatibilityTricks",
        "validator": "utils/validator",
        "graphUtils": "utils/graph",
        "general": "utils/general",
        "cssAlert": "utils/cssAlert",
        "wbrGraph": "lib/wbrGraph2",
        "main": "main",
        "MainView": "modules/MainView"
    },

    shim: {
        "isolario-socket": {
            deps: ["isolario-errors", "jquery-socket"]
        },

        "isolario-facade": {
            deps: ["isolario-socket"]
        },

        "jquery-ui": {
            exports: "$",
            deps: ['jquery']
        },

        "jquery-socket": {
            exports: "$",
            deps: ['jquery']
        },

        "underscore": {
            exports: "_"
        },
        "backbone": {
            exports: "Backbone",
            deps: ["underscore", "jquery"]
        },
        "mousewheel": {
            exports: "$",
            deps: ['jquery-ui']
        },
        "timepicker": {
            exports: "$",
            deps: ['jquery-ui']
        },
        "tinyscrollbar": {
            exports: "$",
            deps: ['jquery-ui']
        },
        "mustaches": {
            exports: "Mustache"
        },
        "raphael": {
            exports: "raphael"
        },
        "raphael-pan": {
            deps:['raphael']
        },
        "modules": {
            deps:[
                'backbone',
                'jquery'
            ]
        },
        "model": {
            deps:[
                'backbone',
                'jquery'
            ]
        },
        "general": {
            deps:[
                'backbone',
                'jquery',
                'compatibilityTricks',
                'dateFormat'
            ]
        },
        "main": {
            deps:[
                'general',
                'modules',
                'model',
                'MainView',
                'streaming-adapter',
                'isolario-facade'
            ]
        },
        "xdomainajax":{
            deps:[
                'jquery'
            ],
            exports: "$"
        },
        "MainView": {
            deps:[
                'backbone',
                'jquery'
            ]
        },
        "wbrGraph" : {
            deps:[
                'TreeMap',
                'graphUtils'
            ]
        }
    }

});

define([
    "jquery",
    "backbone",
    "mustaches",
    "raphael",
    "config",
    "modules",
    "MainView",
    "main",
    "model",
    "connectors/JsonWrapGeneric.js",
    "raphael-pan",
    "tinyscrollbar",
    "mousewheel",
    "timepicker",
    "TreeMap",
    "lib/Intersection.js",
    "wbrGraph",
    "validator",
    "general",
    "cssAlert",
    'streaming-adapter',
    'isolario-facade'

], function($, Backbone, Mustache, raphael, config, modules, MainView) {
    var main, element, instanceName, instance, initialParams, thisWidget, queryParams;

    debugMode = getUrlParam("debug")=="true";// false to prevent console logs

    window.Mustache = Mustache;
    loadCss('modules/css/jquery-ui-191.css');
    loadCss('modules/css/jquery.ui.datepicker.css');
    loadCss('modules/css/bgplay.css');

    var BgplayStart = function() {
        instanceName = 'BGPlayRT';
        instance = getBGPlayInstance(instanceName);

        element = $('#' + instance.domId);
        initialParams = instance.initialParams;
        queryParams = instance.queryParams;

        thisWidget = {
            get_params: function () {
                return queryParams;
            },
            set_params: function (params) {
                queryParams = params;
            }
        };

        main = new BGPlay(element);

        //Override of some methods
        main.advancedInit = function () {
            main.environment.thisWidget = thisWidget;
        };


        main.alert = function (msg, type) {
            alert(msg);
            //main.environment.dom.append(misc.infoMessage(type,msg));
        };

        console.log(JSON.stringify(initialParams, null, 2));

        //Initialization of the BGPlay environment
        main.init({
            width: initialParams.width,
            height: initialParams.height,
            config: config,
            modules: modules,
            mainView: MainView,
            fileRoot: '/',
            imageRoot: 'modules/html/img/',
            templateRoot: 'modules/html/',
            updateWithStreaming: initialParams.updateWithStreaming,
            streamingOn: initialParams.streamingOn,
            streamInitialDump: initialParams.streamInitialDump,
            skipDump: initialParams.skipDump
        });

        main.setDefaultParams(initialParams);

        console.log(main.retrieveData())

        this.destroy = main.destroy;
    };

    return BgplayStart;
});

