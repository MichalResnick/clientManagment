import { ClientModel } from "./client-model";

export class TaskModel{
    public _id:string
    public description: string;
    public date:string;
    public clientId:string;
    public status:boolean;
    public client:ClientModel
  }