import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name:"nodeJS", 
        duration: 10,
        educator:"Silas"
    });

    CreateCourseService.execute({
        name:"reactJS", 
        //duration: 10,
        educator:"Silas"
    });

    return response.send();
}