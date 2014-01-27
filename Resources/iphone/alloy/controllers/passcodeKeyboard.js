function Controller() {
    function ButtonSet(e) {
        var theView = e.source;
        theView.backgroundColor = "#a8a8a8";
    }
    function ButtonUnSet(e) {
        ButtonUnSetView(e.source);
    }
    function ButtonUnSetView(theView) {
        theView.backgroundColor = "#F3F4F4";
    }
    function keyPressed(e) {
        var theView = e.source;
        theView.id;
        ButtonUnSetView(theView);
        var value = (e.source.id, e.source.value);
        if ("c" == value) {
            if (null != passcodeValue && "" != passcodeValue) {
                Ti.API.info("Value is ----: " + passcodeValue);
                Ti.API.info("lengthhhh is ----: " + passcodeValue.length);
                Ti.API.info("Value is ++++: " + passcodeValue.toString().slice(0, 2));
                passcodeValue = passcodeValue.toString().slice(0, passcodeValue.length - 1);
                Ti.App.fireEvent("clearValue", {
                    len: passcodeValue.length
                });
            }
        } else {
            Ti.API.info("value ----: " + value);
            passcodeValue += value;
            Ti.API.info("passcodeValue ----: " + passcodeValue);
            Ti.API.info("Passcode ----: " + passcodeValue);
            Ti.App.fireEvent("setPasswordMask", {
                value: passcodeValue
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "passcodeKeyboard";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.keyboard = Ti.UI.createView({
        top: "50%",
        height: "50%",
        backgroundColor: "#F3F4F4",
        id: "keyboard"
    });
    $.__views.keyboard && $.addTopLevelView($.__views.keyboard);
    $.__views.keyboardContainer = Ti.UI.createView({
        top: "0%",
        height: "100%",
        width: "100%",
        layout: "horizontal",
        id: "keyboardContainer"
    });
    $.__views.keyboard.add($.__views.keyboardContainer);
    $.__views.column1 = Ti.UI.createView({
        top: "0%",
        height: "100%",
        width: "33.1%",
        left: "0%",
        layout: "vertical",
        id: "column1"
    });
    $.__views.keyboardContainer.add($.__views.column1);
    $.__views.key1 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key1",
        value: "1"
    });
    $.__views.column1.add($.__views.key1);
    ButtonSet ? $.__views.key1.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key1!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key1.addEventListener("touchend", keyPressed) : __defers["$.__views.key1!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key1.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key1!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "1",
        id: "__alloyId5"
    });
    $.__views.key1.add($.__views.__alloyId5);
    $.__views.key4 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key4",
        value: "4"
    });
    $.__views.column1.add($.__views.key4);
    ButtonSet ? $.__views.key4.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key4!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key4.addEventListener("touchend", keyPressed) : __defers["$.__views.key4!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key4.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key4!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId6 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "4",
        id: "__alloyId6"
    });
    $.__views.key4.add($.__views.__alloyId6);
    $.__views.key7 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key7",
        value: "7"
    });
    $.__views.column1.add($.__views.key7);
    ButtonSet ? $.__views.key7.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key7!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key7.addEventListener("touchend", keyPressed) : __defers["$.__views.key7!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key7.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key7!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId7 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "7",
        id: "__alloyId7"
    });
    $.__views.key7.add($.__views.__alloyId7);
    $.__views.blank = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "blank"
    });
    $.__views.column1.add($.__views.blank);
    $.__views.column2 = Ti.UI.createView({
        top: "0%",
        height: "100%",
        width: "33.1%",
        left: "0%",
        layout: "vertical",
        id: "column2"
    });
    $.__views.keyboardContainer.add($.__views.column2);
    $.__views.key2 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key2",
        value: "2"
    });
    $.__views.column2.add($.__views.key2);
    ButtonSet ? $.__views.key2.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key2!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key2.addEventListener("touchend", keyPressed) : __defers["$.__views.key2!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key2.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key2!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "2",
        id: "__alloyId8"
    });
    $.__views.key2.add($.__views.__alloyId8);
    $.__views.key5 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key5",
        value: "5"
    });
    $.__views.column2.add($.__views.key5);
    ButtonSet ? $.__views.key5.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key5!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key5.addEventListener("touchend", keyPressed) : __defers["$.__views.key5!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key5.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key5!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId9 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "5",
        id: "__alloyId9"
    });
    $.__views.key5.add($.__views.__alloyId9);
    $.__views.key8 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key8",
        value: "8"
    });
    $.__views.column2.add($.__views.key8);
    ButtonSet ? $.__views.key8.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key8!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key8.addEventListener("touchend", keyPressed) : __defers["$.__views.key8!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key8.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key8!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "8",
        id: "__alloyId10"
    });
    $.__views.key8.add($.__views.__alloyId10);
    $.__views.key0 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key0",
        value: "0"
    });
    $.__views.column2.add($.__views.key0);
    ButtonSet ? $.__views.key0.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key0!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key0.addEventListener("touchend", keyPressed) : __defers["$.__views.key0!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key0.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key0!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "0",
        id: "__alloyId11"
    });
    $.__views.key0.add($.__views.__alloyId11);
    $.__views.column3 = Ti.UI.createView({
        top: "0%",
        height: "100%",
        width: "33.1%",
        left: "0%",
        layout: "vertical",
        id: "column3"
    });
    $.__views.keyboardContainer.add($.__views.column3);
    $.__views.key3 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key3",
        value: "3"
    });
    $.__views.column3.add($.__views.key3);
    ButtonSet ? $.__views.key3.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key3!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key3.addEventListener("touchend", keyPressed) : __defers["$.__views.key3!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key3.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key3!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "3",
        id: "__alloyId12"
    });
    $.__views.key3.add($.__views.__alloyId12);
    $.__views.key6 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key6",
        value: "6"
    });
    $.__views.column3.add($.__views.key6);
    ButtonSet ? $.__views.key6.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key6!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key6.addEventListener("touchend", keyPressed) : __defers["$.__views.key6!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key6.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key6!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId13 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "6",
        id: "__alloyId13"
    });
    $.__views.key6.add($.__views.__alloyId13);
    $.__views.key9 = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "key9",
        value: "9"
    });
    $.__views.column3.add($.__views.key9);
    ButtonSet ? $.__views.key9.addEventListener("touchstart", ButtonSet) : __defers["$.__views.key9!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.key9.addEventListener("touchend", keyPressed) : __defers["$.__views.key9!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.key9.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.key9!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "9",
        id: "__alloyId14"
    });
    $.__views.key9.add($.__views.__alloyId14);
    $.__views.clear = Ti.UI.createView({
        top: "0%",
        height: "25%",
        width: "100%",
        backgroundSelectedColor: "#a8a8a8",
        id: "clear",
        value: "c"
    });
    $.__views.column3.add($.__views.clear);
    ButtonSet ? $.__views.clear.addEventListener("touchstart", ButtonSet) : __defers["$.__views.clear!touchstart!ButtonSet"] = true;
    keyPressed ? $.__views.clear.addEventListener("touchend", keyPressed) : __defers["$.__views.clear!touchend!keyPressed"] = true;
    ButtonUnSet ? $.__views.clear.addEventListener("touchcancel", ButtonUnSet) : __defers["$.__views.clear!touchcancel!ButtonUnSet"] = true;
    $.__views.__alloyId15 = Ti.UI.createLabel({
        color: "#454545",
        font: {
            fontWeight: "nomal",
            fontSize: "30"
        },
        touchEnabled: false,
        text: "⌫",
        id: "__alloyId15"
    });
    $.__views.clear.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        backgroundColor: "#C6C7C9",
        height: "1dp",
        width: "100%",
        left: "0%",
        zIndex: "10",
        top: "62.5%",
        id: "__alloyId16"
    });
    $.__views.__alloyId16 && $.addTopLevelView($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        backgroundColor: "#C6C7C9",
        height: "1dp",
        width: "100%",
        left: "0%",
        zIndex: "10",
        top: "75%",
        id: "__alloyId17"
    });
    $.__views.__alloyId17 && $.addTopLevelView($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        backgroundColor: "#C6C7C9",
        height: "1dp",
        width: "100%",
        left: "0%",
        zIndex: "10",
        top: "87.5%",
        id: "__alloyId18"
    });
    $.__views.__alloyId18 && $.addTopLevelView($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        width: "1dp",
        height: "100%",
        top: "50%",
        backgroundColor: "#C6C7C9",
        zIndex: "10",
        left: "33.3%",
        id: "__alloyId19"
    });
    $.__views.__alloyId19 && $.addTopLevelView($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        width: "1dp",
        height: "100%",
        top: "50%",
        backgroundColor: "#C6C7C9",
        zIndex: "10",
        left: "66%",
        id: "__alloyId20"
    });
    $.__views.__alloyId20 && $.addTopLevelView($.__views.__alloyId20);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var passcodeValue = "";
    Ti.App.addEventListener("setTextFieldNull", function() {
        passcodeValue = "";
    });
    __defers["$.__views.key1!touchstart!ButtonSet"] && $.__views.key1.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key1!touchend!keyPressed"] && $.__views.key1.addEventListener("touchend", keyPressed);
    __defers["$.__views.key1!touchcancel!ButtonUnSet"] && $.__views.key1.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key4!touchstart!ButtonSet"] && $.__views.key4.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key4!touchend!keyPressed"] && $.__views.key4.addEventListener("touchend", keyPressed);
    __defers["$.__views.key4!touchcancel!ButtonUnSet"] && $.__views.key4.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key7!touchstart!ButtonSet"] && $.__views.key7.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key7!touchend!keyPressed"] && $.__views.key7.addEventListener("touchend", keyPressed);
    __defers["$.__views.key7!touchcancel!ButtonUnSet"] && $.__views.key7.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key2!touchstart!ButtonSet"] && $.__views.key2.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key2!touchend!keyPressed"] && $.__views.key2.addEventListener("touchend", keyPressed);
    __defers["$.__views.key2!touchcancel!ButtonUnSet"] && $.__views.key2.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key5!touchstart!ButtonSet"] && $.__views.key5.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key5!touchend!keyPressed"] && $.__views.key5.addEventListener("touchend", keyPressed);
    __defers["$.__views.key5!touchcancel!ButtonUnSet"] && $.__views.key5.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key8!touchstart!ButtonSet"] && $.__views.key8.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key8!touchend!keyPressed"] && $.__views.key8.addEventListener("touchend", keyPressed);
    __defers["$.__views.key8!touchcancel!ButtonUnSet"] && $.__views.key8.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key0!touchstart!ButtonSet"] && $.__views.key0.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key0!touchend!keyPressed"] && $.__views.key0.addEventListener("touchend", keyPressed);
    __defers["$.__views.key0!touchcancel!ButtonUnSet"] && $.__views.key0.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key3!touchstart!ButtonSet"] && $.__views.key3.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key3!touchend!keyPressed"] && $.__views.key3.addEventListener("touchend", keyPressed);
    __defers["$.__views.key3!touchcancel!ButtonUnSet"] && $.__views.key3.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key6!touchstart!ButtonSet"] && $.__views.key6.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key6!touchend!keyPressed"] && $.__views.key6.addEventListener("touchend", keyPressed);
    __defers["$.__views.key6!touchcancel!ButtonUnSet"] && $.__views.key6.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.key9!touchstart!ButtonSet"] && $.__views.key9.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.key9!touchend!keyPressed"] && $.__views.key9.addEventListener("touchend", keyPressed);
    __defers["$.__views.key9!touchcancel!ButtonUnSet"] && $.__views.key9.addEventListener("touchcancel", ButtonUnSet);
    __defers["$.__views.clear!touchstart!ButtonSet"] && $.__views.clear.addEventListener("touchstart", ButtonSet);
    __defers["$.__views.clear!touchend!keyPressed"] && $.__views.clear.addEventListener("touchend", keyPressed);
    __defers["$.__views.clear!touchcancel!ButtonUnSet"] && $.__views.clear.addEventListener("touchcancel", ButtonUnSet);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;