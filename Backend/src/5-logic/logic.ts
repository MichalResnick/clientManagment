import { ClientModel, IClientModel } from "../4-models/client-model";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";
import { ITaskModel, TaskModel } from "../4-models/task-model";

//get all clients
function getAllCLients():Promise<IClientModel[]> {
    return ClientModel.find().exec()

}

//get all tasks
function getAllTasks():Promise<ITaskModel[]>{
    return TaskModel.find().populate("client").exec()
}

function addTask(task:ITaskModel):Promise<ITaskModel>{
    const error=task.validateSync()
    if(error) throw new ValidationErrorModel(error.message)
    return task.save()
}

async function deleteTask(_id:string):Promise<void> {
    const deleteTask=await TaskModel.findByIdAndDelete(_id)
    if(!deleteTask) throw new ResourceNotFoundErrorModel(_id)     
  }



export default {
    getAllCLients,
    getAllTasks,
    addTask,
    deleteTask
};