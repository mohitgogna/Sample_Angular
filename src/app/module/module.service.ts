import { Injectable } from '@angular/core';
import { Build } from '../model/Build';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  builds: Build[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Basic MzEwMjc5Nzk2OkNndGFfYmxyQDEyMw==' }),
   

  }

  constructor(private httpClient: HttpClient) { }

  getBuilds(): Build[] {
    for (let i = 0; i < 10; i++) {
      this.builds.push({
        Id: i.toString(),
        Name: "Pipeline " + i,
        Status: "Passed",
        Info: "This is build information of build " + i,
        Version: "v1.1." + i,
        Time: i + "m 24s",
        Link1: "#",
        Link2: "#" + i,
        Link3: "#",
        Progress: "10" + i
      });
    }

    return this.builds;
  }

  getJenkinsBuild(): void {

    let configUrl = "";

    let data = this.httpClient.get<any>(configUrl, this.httpOptions);

    console.log( JSON.stringify(data));
    data.subscribe(a=> console.log(a));
    console.log(data);
  }

  
}
