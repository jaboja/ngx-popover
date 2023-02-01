import {Popover} from "./Popover";
import {PopoverContent} from "./PopoverContent";
import {NgModule} from "@angular/core";

export * from "./Popover";
export * from "./PopoverContent";

@NgModule({
    declarations: [
        PopoverContent,
        Popover,
    ],
    exports: [
        PopoverContent,
        Popover,
    ]
})
export class PopoverModule {

}
