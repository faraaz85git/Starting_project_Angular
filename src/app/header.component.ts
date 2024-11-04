import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    standalone:true,//if false then it will be module based component.
    imports:[],
    //template:"<h1>you cna define template of component here.</h1>"
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"],
    
})
export class HeaderComponent{
}