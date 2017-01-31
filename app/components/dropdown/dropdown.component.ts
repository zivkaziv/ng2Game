/**
 * Created by Eyal on 25/01/2017.
 */
import {Component, ContentChild, TemplateRef, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'dropdown ',
  styles : [],
  template: `
<div (click)="toggleItems()" class="dropdown-root" [ngSwitch]="!! value">
    <div *ngSwitchCase="true" class="dropdown-item-content">
        <template
            [ngTemplateOutlet]="itemTemplate"
            [ngOutletContext]="{ item: value, index: -1 }">
        </template>
            </div>
            <div *ngSwitchCase="false" class="placeholder">
                {{ placeholder || "Nothing Selected" }}
            </div>
        </div>
        <ul *ngIf="isShowingItems" class="dropdown-items">
            <li
                *ngFor="let item of items ; let index = index ;"
                (click)="selectItem( item )"
                class="dropdown-item">
                <div class="dropdown-item-content">
                    <template
                        [ngTemplateOutlet]="itemTemplate"
                        [ngOutletContext]="{ item: item, index: index }">
                    </template>
                </div>
            </li>
        </ul>
`})
export class DropdownComponent {
    //@ContentChild('itemTemplate',{read:TemplateRef})
    @ContentChild(TemplateRef)
    itemTemplate:TemplateRef<any>;

    @Input('source') items;

    @Input() value:any;
    @Output() valueChange = new EventEmitter();

    isShowingItems:boolean;

    // I hide the dropdown items.
    public hideItems() : void {

        this.isShowingItems = false;

    }


    // I select the given item.
    // --
    // NOTE: Since this is a one-way data flow, the selection is being emitted rather
    // than applied directly to the value.
    public selectItem( item: any ) : void {

        this.hideItems();
        this.valueChange.emit( item );

    }


    // I show the dropdown items.
    public showItems() : void {

        this.isShowingItems = true;

    }


    // I show or hide the dropdown items depending on their current visibility.
    public toggleItems() : void {

        this.isShowingItems
            ? this.hideItems()
            : this.showItems()
        ;

    }
}