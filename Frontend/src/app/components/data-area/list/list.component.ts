import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public constructor(private service:DataService){}

  public tasks:TaskModel[]
  

  public async ngOnInit() {

    try {
      this.tasks= await this.service.getAllTasks()
      console.log(this.tasks);
      

    } catch (error:any) {
      alert(error.message)
    } 
  }

  public isStatusOn(status:boolean):boolean{
    return status===true
  }

  public async deleteMe(_id:string){
    try {
      if(!window.confirm("Are you sure?")) return;
      await this.service.deletTask(_id)
      alert("You Deleted Task")

      const index=this.tasks.findIndex(t=>t._id===_id)
      this.tasks.splice(index,1)
    } catch (error:any) {
      alert(error.message)
    }
  }

}
