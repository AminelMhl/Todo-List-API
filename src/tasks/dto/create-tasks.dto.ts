import { v4 as uuidv4 } from "uuid";

export class CreateTasksDto {
    name: string;
    id: string;
    satus: string;

    constructor(name: string){
        this.name = name
        this.id= uuidv4();
        this.satus = "pending";
    }
}
