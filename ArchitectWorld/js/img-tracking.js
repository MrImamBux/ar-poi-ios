/**
 * IMAM BUX-FARRUKH-TAIMOOR
 *
 */
var ImgTracking = {
    loaded: false,

    init: function initFn() {

        this.targetCollectionResource = new AR.TargetCollectionResource("assets/tracking/tracker.wtc", {});

        this.tracker = new AR.ImageTracker(this.targetCollectionResource, {
            onError: function(errorMessage) {
                alert(errorMessage);
            }
        });

        /*************************
         *  building E tracking
         ************************/
        var buildingEBanner = new AR.HtmlDrawable({
            uri: "assets/tracking/building_e.html"
        }, 1.5, {
            viewportWidth: 520,
            viewportHeight: 100,
            translate: { x: 0.36, y: 0.5 },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });

        var building_e = new AR.ImageTrackable(this.tracker, "^buildinge*[0-9]", {
            drawables: {
                cam: [buildingEBanner]
            },
            //onImageRecognized: someFunction,
            onError: function(errorMessage) {
                alert(errorMessage);
            },
            onImageRecognized: function (imgName) {
                console.log(imgName);
            }
        });

        /*************************
         *  Bibliothek tracking
         ************************/
        var bibliothekBanner = new AR.HtmlDrawable({
            uri: "assets/tracking/bibliothek.html"
        }, 1.5, {
            viewportWidth: 520,
            viewportHeight: 100,
            translate: { x: 0.8, y: 1 },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });

        var bibliothek = new AR.ImageTrackable(this.tracker, "^bibliothek*[0-9]", {
            drawables: {
                cam: [bibliothekBanner]
            },
            //onImageRecognized: someFunction,
            onError: function(errorMessage) {
                alert(errorMessage);
            },
            onImageRecognized: function (imgName) {
                console.log(imgName);
            }
        });

        /**********************************
         * Student Service Center tracking
         **********************************/
        var sscBanner = new AR.HtmlDrawable({
            uri: "assets/tracking/ssc.html"
        }, 1.5, {
            viewportWidth: 520,
            viewportHeight: 100,
            translate: { x: 0.8, y: 1 },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });

        var ssc = new AR.ImageTrackable(this.tracker, "^ssc*[0-9]", {
            drawables: {
                cam: [sscBanner]
            },
            //onImageRecognized: someFunction,
            onError: function(errorMessage) {
                alert(errorMessage);
            },
            onImageRecognized: function (imgName) {
                console.log(imgName);
            }
        });

        /**********************************
         * Mensa tracking
         **********************************/
        var mensaBanner = new AR.HtmlDrawable({
            uri: "assets/tracking/mensa.html"
        }, 1.5, {
            viewportWidth: 520,
            viewportHeight: 100,
            translate: { x: 0.8, y: 1 },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });

        var mensa = new AR.ImageTrackable(this.tracker, "^mensa*[0-9]", {
            drawables: {
                cam: [mensaBanner]
            },
            //onImageRecognized: someFunction,
            onError: function(errorMessage) {
                alert(errorMessage);
            },
            onImageRecognized: function (imgName) {
                console.log(imgName);
            }
        });

    }
};

var ImgTrackingHS = {
loaded: false,
    
init: function initFn() {
    
    this.targetCollectionResource = new AR.TargetCollectionResource("assets/tracking/trackerHS.wtc", {});
    
    this.tracker = new AR.ImageTracker(this.targetCollectionResource, {
                                       onError: function(errorMessage) {
                                       alert(errorMessage);
                                       }
                                       });
    
    
    /**********************************
     * HS Fulda Image Magazine
     **********************************/
    var hsBanner = new AR.HtmlDrawable({
                                        uri: "assets/tracking/hs.html"
                                        }, 1.5, {
                                        viewportWidth: 520,
                                        viewportHeight: 125,
                                        translate: { x: 0.8, y: 1 },
                                        horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                        verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                        clickThroughEnabled: true,
                                        allowDocumentLocationChanges: false,
                                        onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                                        AR.context.openInBrowser(uri);
                                        }
                                        });
    
    var ssc = new AR.ImageTrackable(this.tracker, "*", {
                                    drawables: {
                                    cam: [hsBanner]
                                    },
                                    //onImageRecognized: someFunction,
                                    onError: function(errorMessage) {
                                    alert(errorMessage);
                                    },
                                    onImageRecognized: function (imgName) {
                                    console.log(imgName);
                                    }
                                    });
}
};

