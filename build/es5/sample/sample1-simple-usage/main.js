"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var index_1 = require("../../src/index");
var platform_browser_1 = require("@angular/platform-browser");
var Sample1App = /** @class */ (function () {
    function Sample1App() {
    }
    Sample1App = __decorate([
        core_1.Component({
            selector: "app",
            template: "\n<div class=\"container\">\n\n    <!-- regular popover -->\n    <p>\n        It is a long established <span popover=\"Hello fact!\" popoverTitle=\"Fact #1\"><b>click this fact</b></span> that a reader will be distracted by the readable content of a page when looking at its layout. \n        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n        <span popover=\"many, but not all\" popoverPlacement=\"left\"><b>Many desktop</b></span> publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. \n        <span popover=\"various, but not all\" popoverPlacement=\"right\"><b>Various versions</b></span> have evolved over the years, sometimes by accident, <span popover=\"another hint\" popoverPlacement=\"top\"><b>sometimes on purpose</b></span> (injected humour and the like)\n    </p>\n    \n    <br/>\n    <button popover=\"Hello popover. Now click outside.\" [popoverCloseOnClickOutside]=\"true\">\n        click to open popover that will be closed when you click outside of it.\n    </button>\n\n    <!-- popover with dynamic html content -->\n    <br/><br/>\n    <div>\n        <popover-content #myPopover \n            title=\"this header can be omitted\"\n            placement=\"right\"\n            [closeOnClickOutside]=\"true\">\n            <b>Very</b> <span style=\"color: #C21F39\">Dynamic</span> <span style=\"color: #00b3ee\">Reusable</span> \n            <b><i><span style=\"color: #ffc520\">Popover With</span></i></b> <small>Html support</small>.\n            Click outside of this popover and it will be dismissed automatically.\n            <u (click)=\"myPopover.hide()\">Or click here to close it</u>.\n        </popover-content>\n        \n        <button [popover]=\"myPopover\">click this button to see a popover</button>\n    </div>\n\n    <!-- popover show on hover -->\n    <br/>\n    <div>\n        <button popover=\"Hello popover\" [popoverOnHover]=\"true\">hover this button to see a popover</button>\n    </div>\n\n    <!-- popover show on hover and hide only when mouse over outside of the popover -->\n    <br/>\n    <div>\n        <button popover=\"Hello popover\"\n                popoverPlacement=\"right\"\n                [popoverOnHover]=\"true\" \n                [popoverCloseOnMouseOutside]=\"true\">\n            hover this button to see a popover, allows to create interactive popovers\n        </button>\n    </div>\n    \n    <!-- popover with dismiss timeout-->\n    <br/>\n    <div>\n        <button popover=\"Hello dismissible popover\" \n                [popoverDismissTimeout]=\"2000\">click to see this popover. This popover will be dismissed in two seconds</button>\n    </div>\n    \n    <br/>\n    <div>\n        <button popover=\"By default, this popover will be shown to the left if enough space, otherwise, to the right.\" popoverPlacement=\"auto left\">\n            click this button to see a popover using auto placement\n        </button>\n    </div>\n</div>\n"
        })
    ], Sample1App);
    return Sample1App;
}());
exports.Sample1App = Sample1App;
var Sample1Module = /** @class */ (function () {
    function Sample1Module() {
    }
    Sample1Module = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                index_1.PopoverModule
            ],
            declarations: [
                Sample1App
            ],
            bootstrap: [
                Sample1App
            ]
        })
    ], Sample1Module);
    return Sample1Module;
}());
exports.Sample1Module = Sample1Module;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(Sample1Module);
//# sourceMappingURL=main.js.map