import { client } from "./client.model";

export interface project{
  projectId:string;
  projectName:string;
  duration:number;
  teamSize:number;
  client:client
}
