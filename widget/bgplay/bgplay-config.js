/*
 * BGPlay.js
 * Copyright (c) 2013 Massimo Candela, Giuseppe Di Battista, Claudio Squarcella, Roma Tre University and RIPE NCC
 * http://www.bgplayjs.com
 *
 * See the file LICENSE.txt for copying permission.
 */


define(function(){
    return{
        internalDivClass: "bgplayjs",
        safetyMaximumNodes:150,
        safetyMaximumEvents:20000,
        possibleRrcs:[00,01,03,04,05,06,07,10,11,12,13,14,15],
        selectedRrcs:[00,01,03,04,05,06,07,10,11,12,13,14,15],
        selectableRrcs: true,
        ignoreReannouncementsByDefault:true,
        cumulativeAnimations:true,
        doubleClickTimeInterval:400,


        timeline:{
            fontColor : "#000000",
            peakColor: "#FFFFFF", //for now
            rulerColor: "#000000",
            fontStyle: "bold 11px Arial",
            lineColor: "blue",
            lineWidth: 0.6,
            rulerNotchWidth: 0.8,
            infoCanvasHeight: 13,
            warpFont: "bold 10px Arial",
            warpFontColor: "#000000",

            eventWithdrawalColor:"#BA0019",
            eventAnnounceColor:"#2EA300",
            eventInitialstateColor:"gray",
            eventReannunceColor:"#1A5C00",
            eventPathchangeColor:"orange",
            eventPrependingColor:"#F5E53B",
            eventSelectedColor:"#63CBFF",

            timelineCursorFps:18,//Tune this var to improve fluidity/performance
            controlChartHeight:50,
            selectionChartHeight:60,
            controlChartCursorsWidth:2,
            controlChartCursorsColor:"red",//A css valid value
            controlChartLogBaseWarp:10,
            controlChartRulerUnitHeight:6,
            controlChartRulerUnitWidth:6,
            selectedIntervalCursorColor:"blue",
            timelineDateFont:"bold 11px Arial",
            selectionChartSecondToPixels:18,
            minSelectionChartWidth:1950,
            timeWarpWidth:52,//62
            maxSelectionChartEvents:40,
            darkenDisabledTimeline:true,
            disableNotSelectedInstants:true,
            showSelectionInformation:true,
            reloadAnimationWhenItEnds:false,
            offsetOfVisibilityOnSelectionTimeline:20
        },

        controller:{
            parametersInUrl:true,
            keepTrackCurrentInstant:true, //Only if there is one instance of bgplayjs in a page
            disableNotSelectedInstants:true
        },

        graph:{
            computeNodesPosition: true,
            springEmbedderCycles:100,
            paperMinHeight:360,
            whenCoulombRepulsionStarts:0,//12
            whenCoulombRepulsionEnds:95,//
            whenHookInteractionsStarts:35,//0
            whenHookInteractionsEnds:95,//0
            whenOnlyLeavesRepulsion:95,
            whenEdgeNodeRepulsionStarts:85,//59
            pathBold:6,
            skipAfterHops: Infinity, // Default no
            pruneByWeight: 0, // Default no
            defaultDeepForASesEsploration: 2,
            animationPathWithdrawalDelays:[300,300,300,300,300,300], //Each number indicates the amount of milliseconds that a blink lasts expressed as an alternation of normal and the thick states. If you want to increase the number of blinks, add new delays in the array.
            animationMinorChangesDelays:[300,300], //as above
            animationPathInsertionDelay:800,
            animationPathChangeDelay:1200,
            pathColors:["#ff0000", "#ffcc00", "#00ffaa", "#005299", "#f780ff", "#590000", "#594700", "#bfffea", "#bfe1ff",
                "#590053", "#99574d", "#66644d", "#005947", "#001433", "#b3008f", "#992900", "#8f9900", "#00ffee", "#001f73",
                "#ff0088", "#ffa280", "#003033", "#0022ff", "#804062", "#ffd0bf", "#ccff00", "#53a0a6", "#8091ff",
                "#99003d", "#ff6600", "#293300", "#00ccff", "#7c82a6", "#664d57", "#332b26", "#a1e673", "#00aaff", "#6c29a6",
                "#ff0044", "#593000", "#44ff00", "#003c59", "#e1bfff", "#330d17", "#ffa640", "#00590c", "#23698c", "#220033",
                "#ffbfd0", "#d9b56c", "#53a674", "#4d5e66", "#cc00ff", "#ff8091"],//Generated by the CMC(I:c) colour differencing algorithm to procedurally generate a set of visually-distinguishable colours within a certain tolerance.
            pathDefaultStrokeDasharray:[""],
            pathStaticStrokeDasharray:["- "],
            pathIncrementalColoringForTwoPrefixes:true,
            pathColorsDoublePrefixOne:0xFF0000,
            pathColorsDoublePrefixTwo:0x1C7D01,
            pathWeight:1.5,
            notSelectedElementOpacity:0.15,
            pathInterline:0.8,
            patInterlineDistributed:true,
            arcsBeamMaxWidth:true,
            staticDeviation:false,
            nodeWidth:35,
            nodeHeight:25,
            nodeMouseoverMilliseconds:600,
            pathMouseoverMilliseconds:200,
            nodeSelectChildrenMilliseconds:1000,

            nodeTextColor:"black",
            sourceTextColor:"blue",
            targetTextColor:"white",

            nodeBorderColor:"black",
            sourceBorderColor:"blue",
            targetBorderColor:"red",

            nodeColor:"white",
            targetColor:"red",
            sourceColor:"white",

            nodeTextFontSize:'11px'//A css valid value (don't omit the unit of measurement)
        },

        fullScreen:{
            fullScreenVersionPosition: "widget-fullscreen.html"
        }
    }
});