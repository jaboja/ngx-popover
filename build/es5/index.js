"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverModule = void 0;
var Popover_1 = require("./Popover");
var PopoverContent_1 = require("./PopoverContent");
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
__exportStar(require("./Popover"), exports);
__exportStar(require("./PopoverContent"), exports);
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule.ɵfac = function PopoverModule_Factory(t) { return new (t || PopoverModule)(); };
    PopoverModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PopoverModule });
    PopoverModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
    return PopoverModule;
}());
exports.PopoverModule = PopoverModule;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    PopoverContent_1.PopoverContent,
                    Popover_1.Popover,
                ],
                exports: [
                    PopoverContent_1.PopoverContent,
                    Popover_1.Popover,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverContent_1.PopoverContent,
        Popover_1.Popover], exports: [PopoverContent_1.PopoverContent,
        Popover_1.Popover] }); })();
//# sourceMappingURL=index.js.map