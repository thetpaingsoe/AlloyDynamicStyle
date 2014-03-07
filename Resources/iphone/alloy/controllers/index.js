function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mainWindow = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        navBarHidden: true,
        exitOnClose: true,
        id: "mainWindow"
    });
    $.__views.mainWindow && $.addTopLevelView($.__views.mainWindow);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.mainWindow.add($.__views.__alloyId0);
    $.__views.topView = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "topView"
    });
    $.__views.__alloyId0.add($.__views.topView);
    $.__views.title = Ti.UI.createLabel({
        top: 0,
        height: 46,
        width: Ti.UI.FILL,
        textAlign: "center",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        backgroundImage: "/title_green.png",
        text: "Title",
        id: "title"
    });
    $.__views.topView.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mainWindow.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;