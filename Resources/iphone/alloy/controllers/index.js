function Controller() {
    function clear() {
        $.box1.text = "";
        $.box2.text = "";
        $.box3.text = "";
        $.box4.text = "";
        Ti.App.fireEvent("setTextFieldNull");
    }
    function submit(passcode) {
        $.box1.text = "";
        $.box2.text = "";
        $.box3.text = "";
        $.box4.text = "";
        Ti.App.fireEvent("setTextFieldNull");
        alert("Value" + passcode);
    }
    function setBoxValue(len, value) {
        switch (len) {
          case 0:
            $.box1.text = "";
            break;

          case 1:
            $.box1.text = "•";
            $.box2.text = "";
            break;

          case 2:
            $.box1.text = "•";
            $.box2.text = "•";
            $.box3.text = "";
            break;

          case 3:
            $.box1.text = "•";
            $.box2.text = "•";
            $.box3.text = "•";
            $.box4.text = "";
            break;

          case 4:
            $.box1.text = "•";
            $.box2.text = "•";
            $.box3.text = "•";
            $.box4.text = "•";
            setTimeout(function() {
                submit(value);
            }, 300);
            return;
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
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "#00ABF6",
        height: "100%",
        width: "100%",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.clear = Ti.UI.createLabel({
        text: "Clear",
        zIndex: "10",
        textAlign: "right",
        top: "2%",
        color: "#ffffff",
        right: "5%",
        id: "clear"
    });
    $.__views.container.add($.__views.clear);
    clear ? $.__views.clear.addEventListener("click", clear) : __defers["$.__views.clear!click!clear"] = true;
    $.__views.passcoedArea = Ti.UI.createView({
        bottom: "50%",
        height: "20%",
        backgroundColor: "#9d9FA2",
        id: "passcoedArea"
    });
    $.__views.container.add($.__views.passcoedArea);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        color: "#ffffff",
        top: "2%",
        textAlign: "center",
        font: {
            fontSize: Alloy.Globals.fontSize
        },
        text: "Enter Your Code",
        id: "__alloyId0"
    });
    $.__views.passcoedArea.add($.__views.__alloyId0);
    $.__views.boxContainer = Ti.UI.createView({
        top: "30%",
        height: "60%",
        width: "90%",
        layout: "horizontal",
        id: "boxContainer"
    });
    $.__views.passcoedArea.add($.__views.boxContainer);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "20%",
        height: "90%",
        backgroundColor: "#ffffff",
        borderRadius: 2,
        borderColor: "#939598",
        left: "3%",
        id: "__alloyId1"
    });
    $.__views.boxContainer.add($.__views.__alloyId1);
    $.__views.box1 = Ti.UI.createLabel({
        font: {
            fontSize: "65dp",
            fonwWeight: "bold"
        },
        textAlign: "center",
        text: "",
        id: "box1"
    });
    $.__views.__alloyId1.add($.__views.box1);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "20%",
        height: "90%",
        backgroundColor: "#ffffff",
        borderRadius: 2,
        borderColor: "#939598",
        left: "5%",
        id: "__alloyId2"
    });
    $.__views.boxContainer.add($.__views.__alloyId2);
    $.__views.box2 = Ti.UI.createLabel({
        font: {
            fontSize: "65dp",
            fonwWeight: "bold"
        },
        textAlign: "center",
        text: "",
        id: "box2"
    });
    $.__views.__alloyId2.add($.__views.box2);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: "20%",
        height: "90%",
        backgroundColor: "#ffffff",
        borderRadius: 2,
        borderColor: "#939598",
        left: "5%",
        id: "__alloyId3"
    });
    $.__views.boxContainer.add($.__views.__alloyId3);
    $.__views.box3 = Ti.UI.createLabel({
        font: {
            fontSize: "65dp",
            fonwWeight: "bold"
        },
        textAlign: "center",
        text: "",
        id: "box3"
    });
    $.__views.__alloyId3.add($.__views.box3);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "20%",
        height: "90%",
        backgroundColor: "#ffffff",
        borderRadius: 2,
        borderColor: "#939598",
        left: "5%",
        id: "__alloyId4"
    });
    $.__views.boxContainer.add($.__views.__alloyId4);
    $.__views.box4 = Ti.UI.createLabel({
        font: {
            fontSize: "65dp",
            fonwWeight: "bold"
        },
        textAlign: "center",
        text: "",
        id: "box4"
    });
    $.__views.__alloyId4.add($.__views.box4);
    $.__views.passcodeKeyboard = Alloy.createController("passcodeKeyboard", {
        id: "passcodeKeyboard",
        __parentSymbol: $.__views.container
    });
    $.__views.passcodeKeyboard.setParent($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.container.open();
    Ti.App.addEventListener("setPasswordMask", function(e) {
        var value = e.value;
        Ti.API.info("value is : " + e.value);
        Ti.API.info("Length :  " + value.toString().length);
        var len = value.length;
        setBoxValue(len, e.value);
    });
    Ti.App.addEventListener("clearValue", function(e) {
        setBoxValue(e.len);
    });
    __defers["$.__views.clear!click!clear"] && $.__views.clear.addEventListener("click", clear);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;