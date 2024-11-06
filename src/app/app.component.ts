import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task.component';
import { DUMMY_USERS } from './dummy_user';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS;
  userId?:string;
  onSelect(id:string){
      // console.log(id);
      this.userId=id;
  }
}
