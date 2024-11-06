import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    standalone:true,//if false then it will be module based component.
    imports:[],
    //template:"<h1>you cna define template of component here.</h1>"
    templateUrl:"./header.component.html",
    styleUrl:"./header.component.css",  
})
export class HeaderComponent{
}