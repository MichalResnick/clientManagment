import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client-model';
import { TaskModel } from 'src/app/models/task-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
  public clients:ClientModel[]=[]
  public task=new TaskModel()

  public constructor(private service:DataService, private router:Router){}

   public async ngOnInit() {
    try {
      
      this.clients= await this.service.getAllClients()
      console.log(this.clients);
      
      
    } catch (error:any) {
      alert(error.message)
    }
  }

  public async send(){
    try {
      await this.service.addTask(this.task)
      alert("you added task")
      this.router.navigateByUrl("/list")
   
    } catch (error:any) {
      alert(error.message)
    }
  }
}
