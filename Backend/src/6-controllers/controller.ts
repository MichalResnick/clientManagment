import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import { TaskModel } from "../4-models/task-model";

const router = express.Router();


router.get("/clients", async (request: Request, response: Response, next: NextFunction) => {
    try {
     const clients=await logic.getAllCLients()
     response.json(clients)
    }
    catch (err: any) {
        next(err);
    }
});

//get all tasks
router.get("/tasks", async (request: Request, response: Response, next: NextFunction) => {
    try {
     const tasks=await logic.getAllTasks()
     response.json(tasks)
    }
    catch (err: any) {
        next(err);
    }
});

//add task

router.post("/tasks", async (request: Request, response: Response, next: NextFunction) => {
    try {
     const task=new TaskModel(request.body)
     const addedTask=await logic.addTask(task)
     response.status(201).json(addedTask)
    }
    catch (err: any) {
        next(err);
    }
});

router.delete("/tasks/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
    const _id = request.params._id;
    await logic.deleteTask(_id);
    response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;

