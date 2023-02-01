"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./main");
var i2 = require("../../src/PopoverContent.ngfactory");
var i3 = require("@angular/common");
var i4 = require("@angular/platform-browser");
var i5 = require("../../src/index");
var i6 = require("../../src/Popover");
var i7 = require("../../src/PopoverContent");
var Sample1ModuleNgFactory = i0.ɵcmf(i1.Sample1Module, [i1.Sample1App], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.PopoverContentNgFactory, Sample1AppNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_p, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.ɵangular_packages_core_core_ba, i0.ɵangular_packages_core_core_r, [i0.NgZone]), i0.ɵmpd(4608, i0.Compiler, i0.Compiler, []), i0.ɵmpd(5120, i0.APP_ID, i0.ɵangular_packages_core_core_f, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_n, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_o, []), i0.ɵmpd(4608, i4.DomSanitizer, i4.ɵDomSanitizerImpl, [i3.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i4.DomSanitizer]), i0.ɵmpd(4608, i4.HAMMER_GESTURE_CONFIG, i4.HammerGestureConfig, []), i0.ɵmpd(5120, i4.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new i4.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i4.ɵKeyEventsPlugin(p1_0), new i4.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3)]; }, [i3.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i3.DOCUMENT, i3.DOCUMENT, i4.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i4.HAMMER_LOADER]]), i0.ɵmpd(4608, i4.EventManager, i4.EventManager, [i4.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i4.ɵDomSharedStylesHost, i4.ɵDomSharedStylesHost, [i3.DOCUMENT]), i0.ɵmpd(4608, i4.ɵDomRendererFactory2, i4.ɵDomRendererFactory2, [i4.EventManager, i4.ɵDomSharedStylesHost, i0.APP_ID]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i4.ɵDomRendererFactory2]), i0.ɵmpd(6144, i4.ɵSharedStylesHost, null, [i4.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i4.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0) { return [i4.ɵangular_packages_platform_browser_platform_browser_j(p0_0)]; }, [[2, i0.NgProbeToken]]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i4.BrowserModule, i4.BrowserModule, [[3, i4.BrowserModule]]), i0.ɵmpd(1073742336, i5.PopoverModule, i5.PopoverModule, []), i0.ɵmpd(1073742336, i1.Sample1Module, i1.Sample1Module, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, [])]); });
exports.Sample1ModuleNgFactory = Sample1ModuleNgFactory;
var styles_Sample1App = [];
var RenderType_Sample1App = i0.ɵcrt({ encapsulation: 2, styles: styles_Sample1App, data: {} });
exports.RenderType_Sample1App = RenderType_Sample1App;
function View_Sample1App_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 70, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 21, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" It is a long established "])), (_l()(), i0.ɵeld(3, 16777216, null, null, 3, "span", [["popover", "Hello fact!"], ["popoverTitle", "Fact #1"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 4).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 4).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 4).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 4).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 4).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(4, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverTitle: [1, "popoverTitle"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["click this fact"])), (_l()(), i0.ɵted(-1, null, [" that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "])), (_l()(), i0.ɵeld(8, 16777216, null, null, 3, "span", [["popover", "many, but not all"], ["popoverPlacement", "left"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 9).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 9).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 9).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 9).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 9).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(9, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverPlacement: [1, "popoverPlacement"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Many desktop"])), (_l()(), i0.ɵted(-1, null, [" publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "])), (_l()(), i0.ɵeld(13, 16777216, null, null, 3, "span", [["popover", "various, but not all"], ["popoverPlacement", "right"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 14).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 14).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 14).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 14).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 14).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(14, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverPlacement: [1, "popoverPlacement"] }, null), (_l()(), i0.ɵeld(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Various versions"])), (_l()(), i0.ɵted(-1, null, [" have evolved over the years, sometimes by accident, "])), (_l()(), i0.ɵeld(18, 16777216, null, null, 3, "span", [["popover", "another hint"], ["popoverPlacement", "top"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 19).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 19).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 19).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 19).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 19).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(19, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverPlacement: [1, "popoverPlacement"] }, null), (_l()(), i0.ɵeld(20, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["sometimes on purpose"])), (_l()(), i0.ɵted(-1, null, [" (injected humour and the like) "])), (_l()(), i0.ɵeld(23, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵeld(24, 16777216, null, null, 2, "button", [["popover", "Hello popover. Now click outside."]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 25).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 25).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 25).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 25).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 25).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(25, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverCloseOnClickOutside: [1, "popoverCloseOnClickOutside"] }, null), (_l()(), i0.ɵted(-1, null, [" click to open popover that will be closed when you click outside of it. "])), (_l()(), i0.ɵeld(27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵeld(28, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵeld(29, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(30, 0, null, null, 17, "popover-content", [["placement", "right"], ["title", "this header can be omitted"]], null, null, null, i2.View_PopoverContent_0, i2.RenderType_PopoverContent)), i0.ɵdid(31, 4374528, [["myPopover", 4]], 0, i7.PopoverContent, [i0.ElementRef, i0.ChangeDetectorRef, i0.Renderer], { placement: [0, "placement"], title: [1, "title"], closeOnClickOutside: [2, "closeOnClickOutside"] }, null), (_l()(), i0.ɵeld(32, 0, null, 0, 1, "b", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Very"])), (_l()(), i0.ɵeld(34, 0, null, 0, 1, "span", [["style", "color: #C21F39"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Dynamic"])), (_l()(), i0.ɵeld(36, 0, null, 0, 1, "span", [["style", "color: #00b3ee"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Reusable"])), (_l()(), i0.ɵeld(38, 0, null, 0, 3, "b", [], null, null, null, null, null)), (_l()(), i0.ɵeld(39, 0, null, null, 2, "i", [], null, null, null, null, null)), (_l()(), i0.ɵeld(40, 0, null, null, 1, "span", [["style", "color: #ffc520"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Popover With"])), (_l()(), i0.ɵeld(42, 0, null, 0, 1, "small", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Html support"])), (_l()(), i0.ɵted(-1, 0, [". Click outside of this popover and it will be dismissed automatically. "])), (_l()(), i0.ɵeld(45, 0, null, 0, 1, "u", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 31).hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["Or click here to close it"])), (_l()(), i0.ɵted(-1, 0, [". "])), (_l()(), i0.ɵeld(48, 16777216, null, null, 2, "button", [], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 49).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 49).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 49).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 49).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 49).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(49, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"] }, null), (_l()(), i0.ɵted(-1, null, ["click this button to see a popover"])), (_l()(), i0.ɵeld(51, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵeld(52, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(53, 16777216, null, null, 2, "button", [["popover", "Hello popover"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 54).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 54).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 54).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 54).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 54).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(54, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverOnHover: [1, "popoverOnHover"] }, null), (_l()(), i0.ɵted(-1, null, ["hover this button to see a popover"])), (_l()(), i0.ɵeld(56, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵeld(57, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(58, 16777216, null, null, 2, "button", [["popover", "Hello popover"], ["popoverPlacement", "right"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 59).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 59).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 59).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 59).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 59).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(59, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverPlacement: [1, "popoverPlacement"], popoverOnHover: [2, "popoverOnHover"], popoverCloseOnMouseOutside: [3, "popoverCloseOnMouseOutside"] }, null), (_l()(), i0.ɵted(-1, null, [" hover this button to see a popover, allows to create interactive popovers "])), (_l()(), i0.ɵeld(61, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵeld(62, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(63, 16777216, null, null, 2, "button", [["popover", "Hello dismissible popover"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 64).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 64).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 64).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 64).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 64).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(64, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverDismissTimeout: [1, "popoverDismissTimeout"] }, null), (_l()(), i0.ɵted(-1, null, ["click to see this popover. This popover will be dismissed in two seconds"])), (_l()(), i0.ɵeld(66, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i0.ɵeld(67, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(68, 16777216, null, null, 2, "button", [["popover", "By default, this popover will be shown to the left if enough space, otherwise, to the right."], ["popoverPlacement", "auto left"]], null, [[null, "click"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 69).showOrHideOnClick() !== false);
        ad = (pd_0 && ad);
    } if (("focusin" === en)) {
        var pd_1 = (i0.ɵnov(_v, 69).showOnHover() !== false);
        ad = (pd_1 && ad);
    } if (("mouseenter" === en)) {
        var pd_2 = (i0.ɵnov(_v, 69).showOnHover() !== false);
        ad = (pd_2 && ad);
    } if (("focusout" === en)) {
        var pd_3 = (i0.ɵnov(_v, 69).hideOnHover() !== false);
        ad = (pd_3 && ad);
    } if (("mouseleave" === en)) {
        var pd_4 = (i0.ɵnov(_v, 69).hideOnHover() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(69, 540672, null, 0, i6.Popover, [i0.ViewContainerRef, i0.ComponentFactoryResolver, i0.ApplicationRef, i0.Injector], { content: [0, "content"], popoverPlacement: [1, "popoverPlacement"] }, null), (_l()(), i0.ɵted(-1, null, [" click this button to see a popover using auto placement "]))], function (_ck, _v) { var currVal_0 = "Hello fact!"; var currVal_1 = "Fact #1"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = "many, but not all"; var currVal_3 = "left"; _ck(_v, 9, 0, currVal_2, currVal_3); var currVal_4 = "various, but not all"; var currVal_5 = "right"; _ck(_v, 14, 0, currVal_4, currVal_5); var currVal_6 = "another hint"; var currVal_7 = "top"; _ck(_v, 19, 0, currVal_6, currVal_7); var currVal_8 = "Hello popover. Now click outside."; var currVal_9 = true; _ck(_v, 25, 0, currVal_8, currVal_9); var currVal_10 = "right"; var currVal_11 = "this header can be omitted"; var currVal_12 = true; _ck(_v, 31, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = i0.ɵnov(_v, 31); _ck(_v, 49, 0, currVal_13); var currVal_14 = "Hello popover"; var currVal_15 = true; _ck(_v, 54, 0, currVal_14, currVal_15); var currVal_16 = "Hello popover"; var currVal_17 = "right"; var currVal_18 = true; var currVal_19 = true; _ck(_v, 59, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = "Hello dismissible popover"; var currVal_21 = 2000; _ck(_v, 64, 0, currVal_20, currVal_21); var currVal_22 = "By default, this popover will be shown to the left if enough space, otherwise, to the right."; var currVal_23 = "auto left"; _ck(_v, 69, 0, currVal_22, currVal_23); }, null); }
exports.View_Sample1App_0 = View_Sample1App_0;
function View_Sample1App_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app", [], null, null, null, View_Sample1App_0, RenderType_Sample1App)), i0.ɵdid(1, 49152, null, 0, i1.Sample1App, [], null, null)], null, null); }
exports.View_Sample1App_Host_0 = View_Sample1App_Host_0;
var Sample1AppNgFactory = i0.ɵccf("app", i1.Sample1App, View_Sample1App_Host_0, {}, {}, []);
exports.Sample1AppNgFactory = Sample1AppNgFactory;
//# sourceMappingURL=main.ngfactory.js.map