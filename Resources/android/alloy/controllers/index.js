function Controller() {
    function changeTheme(e) {
        var theme = e.source.theme;
        if (1 === theme) {
            $.btnChange.theme = 2;
            $.btnChange.title = "Change Blue";
            $.addClass($.title, "greenTitleBackground");
        } else if (2 === theme) {
            $.btnChange.theme = 3;
            $.btnChange.title = "Change Gray";
            $.addClass($.title, "blueTitleBackground");
            $.removeClass($.title, "greenTitleBackground");
        } else {
            $.btnChange.theme = 1;
            $.btnChange.title = "Change Green";
            $.addClass($.title, "grayTitleBackground");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
        backgroundImage: "/green/title_green.png",
        top: 0,
        height: 46,
        width: Ti.UI.FILL,
        textAlign: "center",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        text: "Title",
        id: "title"
    });
    $.__views.topView.add($.__views.title);
    $.__views.middleView = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "middleView"
    });
    $.__views.__alloyId0.add($.__views.middleView);
    $.__views.btnChange = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        title: "Change Blue",
        id: "btnChange",
        theme: "1"
    });
    $.__views.middleView.add($.__views.btnChange);
    changeTheme ? $.__views.btnChange.addEventListener("click", changeTheme) : __defers["$.__views.btnChange!click!changeTheme"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    alert(Ti.Platform.version);
    $.mainWindow.open();
    __defers["$.__views.btnChange!click!changeTheme"] && $.__views.btnChange.addEventListener("click", changeTheme);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;