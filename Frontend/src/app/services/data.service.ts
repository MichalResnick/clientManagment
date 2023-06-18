import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientModel } from '../models/client-model';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from 'rxjs';
import { TaskModel } from '../models/task-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

public async getAllClients():Promise<ClientModel[]> {
       const observable=this.http.get<ClientModel[]>(appConfig.clientsUrl)
       const clients= await firstValueFrom(observable)
        return clients      
    }

public async getAllTasks():Promise<TaskModel[]> {
        const observable=this.http.get<TaskModel[]>(appConfig.tasksUrl)
        const tasks=await firstValueFrom(observable)
         return tasks      
     }

public async addTask(task:TaskModel):Promise<void>{
        const observable=this.http.post<TaskModel>(appConfig.tasksUrl,task)
        await firstValueFrom(observable)
    }
    
public async deletTask(_id:string):Promise<void>{
        const observable=this.http.delete<TaskModel>(appConfig.tasksUrl+_id)
        await firstValueFrom(observable) 
    } 
}
