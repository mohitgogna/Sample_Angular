import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Build } from './Build';

@Injectable()

export class StaticDataSource {
    private builds: Build[]=[];

    constructor(){
        
        for (let i = 0; i < 10; i++) {
            this.builds.push({
              Id: i.toString(),
              Name: "Pipeline " + (i+1),
              Status: "Passed",
              Info: "This is build information of build " + (i+1),
              Version: "v1.1." + (i+1),
              Time: (i+1) + "m 24s",
              Link1: "#",
              Link2: "#" + (i+1),
              Link3: "#",
              Progress: "10" + (i+1)
            });
          }
    }

    getBuilds():Observable<Build[]>{
        return from([this.builds]);
    }


}