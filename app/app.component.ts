/**
 * Created by Eyal on 23/01/2017.
 */
import {Component,VERSION} from "@angular/core";

interface Friend {
    id: number;
    name: string;
    avatar: string;
}

@Component({
    selector:'my-app',
    template:`
    <game></game>
`})
export class AppComponent{
    items = [1,2,3,4];
    name:string = 'eyal';
    friends:Friend[] = [
    {
        id: 1,
        name: "Joanna",
        avatar: "https://randomuser.me/api/portraits/thumb/men/76.jpg"
    },
    {
        id: 2,
        name: "Kim",
        avatar: "https://randomuser.me/api/portraits/thumb/men/76.jpg"
    },
    {
        id: 3,
        name: "Sarah",
        avatar: "https://randomuser.me/api/portraits/thumb/men/76.jpg"    },
    {
        id: 4,
        name: "Tricia",
        avatar: "https://randomuser.me/api/portraits/thumb/men/76.jpg"
    }
];

    user //= {id:123,name:'eyal'};


    val:number = 100;
    constructor(){
        /*setInterval(()=>{
            this.name += '!';
        },1000);*/
    }
    get isAAA(){
        return this.items.length > 5;
    }

    onClick(event:MouseEvent){
        console.log(`on click: ${JSON.stringify(event)}`);
        //event.stopPropagation();
    }
}



/*

Log(true)(
    Component({})(
        AppComponent
    )
);

function Log(isDebug:boolean){
    return (target)=>{
        target.prototype.log = function () {

        };
        return target;
    }
}*/
/*
var seI = setInterval;
window.setInterval = function (fn,ms) {
  seI(()=>{
      fn();
      tick();
  },ms)
};*/
