/**
 * Created by Eyal on 25/01/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TabsComponent} from "./tabs.component";
import {TabComponent} from "./tab.component";
import {DropdownComponent} from "./dropdown/dropdown.component";

@NgModule({
    declarations:[
        TabsComponent,
        TabComponent,
        DropdownComponent
    ],
    imports     :[
        CommonModule
    ],
    exports     :[
        TabsComponent,
        TabComponent,
        DropdownComponent
    ]
})
export class ComponentsModule{}