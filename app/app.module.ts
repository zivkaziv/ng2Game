import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CounterComponent} from "./counter.component";
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "./components/components.module";
import {MaterialModule} from "@angular/material";
import {GameModule} from "./game/game.module";

@NgModule({
    declarations:[
        AppComponent,
        CounterComponent
    ],
    providers   :[],
    bootstrap   :[AppComponent],
    imports     :[
        BrowserModule,
        FormsModule,
        MaterialModule.forRoot(),
        // my Modules
        ComponentsModule,
        GameModule
    ],
    exports     :[]
})
export class AppModule{}