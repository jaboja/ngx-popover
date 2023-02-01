"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Popover_1 = require("./Popover");
var PopoverContent_1 = require("./PopoverContent");
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
__export(require("./Popover"));
__export(require("./PopoverContent"));
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule.ɵmod = i0.ɵɵdefineNgModule({ type: PopoverModule });
    PopoverModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); } });
    return PopoverModule;
}());
exports.PopoverModule = PopoverModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverContent_1.PopoverContent,
        Popover_1.Popover], exports: [PopoverContent_1.PopoverContent,
        Popover_1.Popover] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    PopoverContent_1.PopoverContent,
                    Popover_1.Popover,
                ],
                exports: [
                    PopoverContent_1.PopoverContent,
                    Popover_1.Popover,
                ],
                entryComponents: [
                    PopoverContent_1.PopoverContent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=index.js.map