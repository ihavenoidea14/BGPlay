define(
    [
        "modules/bgplay/BgpDataChecksView.js",
        "modules/bgplay/ControllerQuerySimpleView.js",
        "modules/bgplay/InfoPanelView.js",
        "modules/bgplay/GraphView.js",
        "modules/bgplay/TimelineView.js",
        "modules/bgplay/ControllerView.js",
        "modules/bgplay/LegendView.js",
        "modules/bgplay/NodePositionView.js",
        "modules/bgplay/OptionPopupView.js",
        "modules/bgplay/OptionAnimationSpeedView.js",
        "modules/bgplay/OptionRestoreGraph.js",
        "modules/bgplay/OptionGraphDeep.js",
        "modules/bgplay/OptionLinkWeight.js",
        "modules/bgplay/AboutBgplayView.js"


    ],  function(
        BgpDataChecksView,
        ControllerQuerySimpleView,
        InfoPanelView,
        GraphView,
        TimelineView,
        ControllerView,
        LegendView,
        NodePositionView,
        OptionPopupView,
        OptionAnimationSpeedView,
        OptionRestoreGraph,
        OptionGraphDeep,
        OptionLinkWeight,
        AboutBgplayView

    ){

        return [
            {"types":["bgp"], "modes":["consistent"], "view": BgpDataChecksView}, //look! types and modes are in OR
            {"types":["bgp"], "modes":["inconsistent"], "domClass": "bgplayControllerDiv", "view": ControllerQuerySimpleView},
            {"types":["all"], "modes":["consistent"], "domClass": "bgplayInfoDiv", "view": InfoPanelView},
            {"types":["all"], "modes":["consistent"], "domClass": "bgplayGraphDiv", "view": GraphView},
            {"types":["all"], "modes":["consistent"], "domClass": "bgplayTimelineDiv", "view": TimelineView},
            {"types":["bgp"], "modes":["consistent"], "domClass": "bgplayControllerDiv", "view": ControllerView},
            {"types":["bgp"], "modes":["consistent"], "domClass": "bgplayLegendDiv", "view": LegendView},
            {"types":["all"], "modes":["consistent"], "view": NodePositionView},
            {"types":["all"], "modes":["consistent"], "view": OptionPopupView},
            {"types":["all"], "modes":["consistent"], "view": OptionAnimationSpeedView},
            {"types":["all"], "modes":["consistent"], "view": OptionGraphDeep},
            {"types":["all"], "modes":["consistent"], "view": OptionLinkWeight},
            {"types":["all"], "modes":["consistent"], "view": AboutBgplayView},
            {"types":["all"], "modes":["consistent"], "view": OptionRestoreGraph}
        ]

    });