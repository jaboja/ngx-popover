"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverContent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var _c0 = ["popoverDiv"];
var _c1 = ["*"];
var PopoverContent = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function PopoverContent(element, cdr, renderer2) {
        var _this = this;
        this.element = element;
        this.cdr = cdr;
        this.renderer2 = renderer2;
        this.placement = "bottom";
        this.animation = true;
        this.closeOnClickOutside = false;
        this.closeOnMouseOutside = false;
        this.onCloseFromOutside = new core_1.EventEmitter();
        this.top = -10000;
        this.left = -10000;
        this.isIn = false;
        this.displayType = "none";
        // -------------------------------------------------------------------------
        // Anonymous
        // -------------------------------------------------------------------------
        /**
         * Closes dropdown if user clicks outside of this directive.
         */
        this.onDocumentMouseDown = function (event) {
            var element = _this.element.nativeElement;
            if (!element || !_this.popover)
                return;
            if (element.contains(event.target) || _this.popover.getElement().contains(event.target))
                return;
            _this.hide();
            _this.onCloseFromOutside.emit(undefined);
        };
    }
    PopoverContent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.closeOnClickOutside)
            this.listenClickFunc = this.renderer2.listen("document", "mousedown", function (event) { return _this.onDocumentMouseDown(event); });
        if (this.closeOnMouseOutside)
            this.listenMouseFunc = this.renderer2.listen("document", "mouseover", function (event) { return _this.onDocumentMouseDown(event); });
        this.show();
        this.cdr.detectChanges();
    };
    PopoverContent.prototype.ngOnDestroy = function () {
        if (this.closeOnClickOutside)
            this.listenClickFunc();
        if (this.closeOnMouseOutside)
            this.listenMouseFunc();
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    PopoverContent.prototype.show = function () {
        if (!this.popover || !this.popover.getElement() || !this.popover.content)
            return;
        var p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
        this.displayType = "block";
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
    };
    PopoverContent.prototype.hide = function () {
        this.top = -10000;
        this.left = -10000;
        this.isIn = true;
        this.popover.hide();
    };
    PopoverContent.prototype.hideFromPopover = function () {
        this.top = -10000;
        this.left = -10000;
        this.isIn = true;
    };
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    PopoverContent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = true; }
        var positionStrParts = positionStr.split("-");
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || "center";
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        this.effectivePlacement = pos0 = this.getEffectivePlacement(pos0, hostEl, targetEl);
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case "right":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case "left":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case "bottom":
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    };
    PopoverContent.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document && !this.popover.popoverInBody) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    PopoverContent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    PopoverContent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) // IE
            return nativeEl.currentStyle[cssProp];
        if (window.getComputedStyle)
            return window.getComputedStyle(nativeEl)[cssProp];
        // finally try and get inline style
        return nativeEl.style[cssProp];
    };
    PopoverContent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, "position") || "static") === "static";
    };
    PopoverContent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    PopoverContent.prototype.getEffectivePlacement = function (placement, hostElement, targetElement) {
        var placementParts = placement.split(" ");
        if (placementParts[0] !== "auto") {
            return placement;
        }
        var hostElBoundingRect = hostElement.getBoundingClientRect();
        var desiredPlacement = placementParts[1] || "bottom";
        if (desiredPlacement === "top" && hostElBoundingRect.top - targetElement.offsetHeight < 0) {
            return "bottom";
        }
        if (desiredPlacement === "bottom" && hostElBoundingRect.bottom + targetElement.offsetHeight > window.innerHeight) {
            return "top";
        }
        if (desiredPlacement === "left" && hostElBoundingRect.left - targetElement.offsetWidth < 0) {
            return "right";
        }
        if (desiredPlacement === "right" && hostElBoundingRect.right + targetElement.offsetWidth > window.innerWidth) {
            return "left";
        }
        return desiredPlacement;
    };
    PopoverContent.ɵfac = function PopoverContent_Factory(t) { return new (t || PopoverContent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    PopoverContent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PopoverContent, selectors: [["popover-content"]], viewQuery: function PopoverContent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popoverDiv = _t.first);
        } }, inputs: { content: "content", inBody: "inBody", popoverInBody: "popoverInBody", placement: "placement", title: "title", animation: "animation", closeOnClickOutside: "closeOnClickOutside", closeOnMouseOutside: "closeOnMouseOutside" }, ngContentSelectors: _c1, decls: 9, vars: 15, consts: [["role", "popover", 2, "display", "block"], ["popoverDiv", ""], [1, "virtual-area", 3, "hidden"], [1, "arrow"], [1, "popover-title", 3, "hidden"], [1, "popover-content"], [3, "innerHtml"]], template: function PopoverContent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵelement(2, "div", 2)(3, "div", 3);
            i0.ɵɵelementStart(4, "h3", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵprojection(7);
            i0.ɵɵelement(8, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("popover ", ctx.effectivePlacement, "");
            i0.ɵɵstyleProp("top", ctx.top + "px")("left", ctx.left + "px");
            i0.ɵɵclassProp("in", ctx.isIn)("fade", ctx.animation);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hidden", !ctx.closeOnMouseOutside);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hidden", !ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("innerHtml", ctx.content, i0.ɵɵsanitizeHtml);
        } }, styles: [".popover[_ngcontent-%COMP%]   .virtual-area[_ngcontent-%COMP%] {\n    height: 11px;\n    width: 100%;\n    position: absolute;\n}\n.popover.top[_ngcontent-%COMP%]   .virtual-area[_ngcontent-%COMP%] {\n    bottom: -11px;\n}\n.popover.bottom[_ngcontent-%COMP%]   .virtual-area[_ngcontent-%COMP%] {\n    top: -11px;\n}\n.popover.left[_ngcontent-%COMP%]   .virtual-area[_ngcontent-%COMP%] {\n    right: -11px;\n}\n.popover.right[_ngcontent-%COMP%]   .virtual-area[_ngcontent-%COMP%] {\n    left: -11px;\n}"] });
    return PopoverContent;
}());
exports.PopoverContent = PopoverContent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverContent, [{
        type: core_1.Component,
        args: [{ selector: "popover-content", template: "\n<div #popoverDiv class=\"popover {{ effectivePlacement }}\"\n     [style.top]=\"top + 'px'\"\n     [style.left]=\"left + 'px'\"\n     [class.in]=\"isIn\"\n     [class.fade]=\"animation\"\n     style=\"display: block\"\n     role=\"popover\">\n    <div [hidden]=\"!closeOnMouseOutside\" class=\"virtual-area\"></div>\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-title\" [hidden]=\"!title\">{{ title }}</h3>\n    <div class=\"popover-content\">\n        <ng-content></ng-content>\n        <div [innerHtml]=\"content\"></div>\n    </div>\n</div>\n", styles: ["\n.popover .virtual-area {\n    height: 11px;\n    width: 100%;\n    position: absolute;\n}\n.popover.top .virtual-area {\n    bottom: -11px;\n}\n.popover.bottom .virtual-area {\n    top: -11px;\n}\n.popover.left .virtual-area {\n    right: -11px;\n}\n.popover.right .virtual-area {\n    left: -11px;\n}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { content: [{
            type: core_1.Input
        }], inBody: [{
            type: core_1.Input
        }], popoverInBody: [{
            type: core_1.Input
        }], placement: [{
            type: core_1.Input
        }], title: [{
            type: core_1.Input
        }], animation: [{
            type: core_1.Input
        }], closeOnClickOutside: [{
            type: core_1.Input
        }], closeOnMouseOutside: [{
            type: core_1.Input
        }], popoverDiv: [{
            type: core_1.ViewChild,
            args: ["popoverDiv", {
                    static: true
                }]
        }] }); })();
//# sourceMappingURL=PopoverContent.js.map