"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Eyal on 25/01/2017.
 */
var core_1 = require("@angular/core");
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    // I hide the dropdown items.
    DropdownComponent.prototype.hideItems = function () {
        this.isShowingItems = false;
    };
    // I select the given item.
    // --
    // NOTE: Since this is a one-way data flow, the selection is being emitted rather
    // than applied directly to the value.
    DropdownComponent.prototype.selectItem = function (item) {
        this.hideItems();
        this.valueChange.emit(item);
    };
    // I show the dropdown items.
    DropdownComponent.prototype.showItems = function () {
        this.isShowingItems = true;
    };
    // I show or hide the dropdown items depending on their current visibility.
    DropdownComponent.prototype.toggleItems = function () {
        this.isShowingItems
            ? this.hideItems()
            : this.showItems();
    };
    __decorate([
        core_1.ContentChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], DropdownComponent.prototype, "itemTemplate", void 0);
    __decorate([
        core_1.Input('source'), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "valueChange", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'dropdown ',
            styles: [],
            template: "\n<div (click)=\"toggleItems()\" class=\"dropdown-root\" [ngSwitch]=\"!! value\">\n    <div *ngSwitchCase=\"true\" class=\"dropdown-item-content\">\n        <template\n            [ngTemplateOutlet]=\"itemTemplate\"\n            [ngOutletContext]=\"{ item: value, index: -1 }\">\n        </template>\n            </div>\n            <div *ngSwitchCase=\"false\" class=\"placeholder\">\n                {{ placeholder || \"Nothing Selected\" }}\n            </div>\n        </div>\n        <ul *ngIf=\"isShowingItems\" class=\"dropdown-items\">\n            <li\n                *ngFor=\"let item of items ; let index = index ;\"\n                (click)=\"selectItem( item )\"\n                class=\"dropdown-item\">\n                <div class=\"dropdown-item-content\">\n                    <template\n                        [ngTemplateOutlet]=\"itemTemplate\"\n                        [ngOutletContext]=\"{ item: item, index: index }\">\n                    </template>\n                </div>\n            </li>\n        </ul>\n" }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map