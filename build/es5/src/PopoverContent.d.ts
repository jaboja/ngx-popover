import { AfterViewInit, ElementRef, ChangeDetectorRef, OnDestroy, EventEmitter, Renderer2 } from "@angular/core";
import { Popover } from "./Popover";
import * as i0 from "@angular/core";
export declare class PopoverContent implements AfterViewInit, OnDestroy {
    protected element: ElementRef;
    protected cdr: ChangeDetectorRef;
    protected renderer2: Renderer2;
    content: string;
    inBody: string;
    popoverInBody: boolean;
    placement: "top" | "bottom" | "left" | "right" | "auto" | "auto top" | "auto bottom" | "auto left" | "auto right";
    title: string;
    animation: boolean;
    closeOnClickOutside: boolean;
    closeOnMouseOutside: boolean;
    popoverDiv: ElementRef;
    popover: Popover;
    onCloseFromOutside: EventEmitter<any>;
    top: number;
    left: number;
    isIn: boolean;
    displayType: string;
    effectivePlacement: string;
    /**
     * Closes dropdown if user clicks outside of this directive.
     */
    onDocumentMouseDown: (event: any) => void;
    constructor(element: ElementRef, cdr: ChangeDetectorRef, renderer2: Renderer2);
    listenClickFunc: any;
    listenMouseFunc: any;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    hideFromPopover(): void;
    protected positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: string, appendToBody?: boolean): {
        top: number;
        left: number;
    };
    protected position(nativeEl: HTMLElement): {
        width: number;
        height: number;
        top: number;
        left: number;
    };
    protected offset(nativeEl: any): {
        width: number;
        height: number;
        top: number;
        left: number;
    };
    protected getStyle(nativeEl: HTMLElement, cssProp: string): string;
    protected isStaticPositioned(nativeEl: HTMLElement): boolean;
    protected parentOffsetEl(nativeEl: HTMLElement): any;
    protected getEffectivePlacement(placement: string, hostElement: HTMLElement, targetElement: HTMLElement): string;
    static ɵfac: i0.ɵɵFactoryDef<PopoverContent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PopoverContent, "popover-content", never, { "content": "content"; "inBody": "inBody"; "popoverInBody": "popoverInBody"; "placement": "placement"; "title": "title"; "animation": "animation"; "closeOnClickOutside": "closeOnClickOutside"; "closeOnMouseOutside": "closeOnMouseOutside"; }, {}, never, ["*"]>;
}
