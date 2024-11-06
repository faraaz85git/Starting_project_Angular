import { Component,computed,signal,Input, input, Output, EventEmitter, output } from "@angular/core";

import { DUMMY_USERS } from "../dummy_user";
import { combineLatest } from "rxjs";

@Component({
    selector:"app-user",
    standalone:true,
    templateUrl: "./user.component.html",
    styleUrl: "./user.component.css",

})
export class UserComponent{
    /* using signal object for state management.

    users=signal(DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]); 

    imagePath=computed(()=>"assets/users/"+this.users().avatar)

    onClick(){
        this.users.set(DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)])
    }*/
        /******************Using input and ouput decorator.********************** */
        //getting input from outside the component as attr to custom tag for component
        //Input through Input decorator as simple value
        // @Input({required:true}) avatar!:string;  //@Input decorator making this property to seetable from outside and ! show that it will bw assigned with some value at later tiem.
        // @Input({required:true}) name!:string;   //reqired is true ie it is required property
        // @Input({required:true}) id!:string;
        //output decorator is attaching custom output or custom event to component
        // @Output() select=new EventEmitter();
        // get imagePath(){
        //     return "assets/users/" + this.avatar;
        // }

        // onClick(){
        //    //on clicking on component select event will trigger and emit value to parent component
        //    this.select.emit(this.id);
        // }



        /*********************Using input and output function for same task as prev****************** */
        // accecpting inputs as signals 
        //input is comming as value then it is getting trans to signals.
        avatar=input.required<string>(); //input is generc function for taking input to property as attribute to custom tag for component.
        name=input.required<string>();//reqiured is making this property required and <string> is saying ts that variable will store string type value.
        id=input.required<string>();
        select=output<string>(); // sae as @output() select-new eventEmitter()
        imagePath=computed(()=>{ 
            return "assets/users/" + this.avatar();
        });

        onClick(){
            this.select.emit(this.id());
        }
    }